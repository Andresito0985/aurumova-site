"""
Aurum Nova - Procedural Diode Laser Machine (v3)
Wedge-bodied tabletop diode laser on a winged pedestal cart.
Modeled from real-machine reference photos. No logos, no readable text.

Run:
  /Applications/Blender.app/Contents/MacOS/Blender --background \
      --python create-aurum-laser-machine.py
"""

import bpy
import bmesh
import math
import os

OUTPUT_PATH = "/Users/andresalcantara/Documents/aurumova-site/public/models/aurum-laser-machine.glb"

# ---------------------------------------------------------------------------
# Palette
# ---------------------------------------------------------------------------
COL_PEARL    = (0.955, 0.948, 0.932, 1.0)
COL_PEARL_HI = (0.970, 0.965, 0.950, 1.0)
COL_BLACK    = (0.022, 0.024, 0.028, 1.0)
COL_SCREEN   = (0.030, 0.038, 0.055, 1.0)
COL_BEZEL    = (0.045, 0.048, 0.054, 1.0)
COL_GRAPHITE = (0.115, 0.120, 0.130, 1.0)
COL_SILVER   = (0.700, 0.708, 0.720, 1.0)
COL_SILVER_DK= (0.480, 0.488, 0.500, 1.0)
COL_HP_GREY  = (0.760, 0.768, 0.778, 1.0)
COL_HP_DARK  = (0.420, 0.428, 0.438, 1.0)
COL_AMBER    = (0.920, 0.560, 0.180, 1.0)
COL_GOLD     = (0.760, 0.620, 0.380, 1.0)
COL_RED      = (0.760, 0.110, 0.090, 1.0)
COL_CYAN     = (0.380, 0.760, 0.920, 1.0)
COL_CYAN_DIM = (0.220, 0.520, 0.700, 1.0)
COL_HOSE     = (0.430, 0.438, 0.452, 1.0)

# ---------------------------------------------------------------------------
# Reset scene
# ---------------------------------------------------------------------------
bpy.ops.object.select_all(action='SELECT')
bpy.ops.object.delete(use_global=False)
for block in list(bpy.data.meshes):     bpy.data.meshes.remove(block)
for block in list(bpy.data.materials):  bpy.data.materials.remove(block)
for block in list(bpy.data.curves):     bpy.data.curves.remove(block)

# ---------------------------------------------------------------------------
# Materials
# ---------------------------------------------------------------------------
def make_pbr(name, color, roughness=0.5, metallic=0.0,
             emission=None, emission_strength=0.0):
    mat = bpy.data.materials.new(name)
    mat.use_nodes = True
    bsdf = mat.node_tree.nodes.get("Principled BSDF")
    bsdf.inputs["Base Color"].default_value = color
    bsdf.inputs["Roughness"].default_value = roughness
    bsdf.inputs["Metallic"].default_value = metallic
    if emission is not None:
        if "Emission Color" in bsdf.inputs:
            bsdf.inputs["Emission Color"].default_value = emission
        elif "Emission" in bsdf.inputs:
            bsdf.inputs["Emission"].default_value = emission
        if "Emission Strength" in bsdf.inputs:
            bsdf.inputs["Emission Strength"].default_value = emission_strength
    return mat

M = {
    "pearl":    make_pbr("M_Pearl",    COL_PEARL,    0.36, 0.05),
    "pearl_hi": make_pbr("M_PearlHi",  COL_PEARL_HI, 0.30, 0.05),
    "black":    make_pbr("M_Black",    COL_BLACK,    0.30, 0.10),
    "screen":   make_pbr("M_Screen",   COL_SCREEN,   0.16, 0.10),
    "bezel":    make_pbr("M_Bezel",    COL_BEZEL,    0.28, 0.20),
    "graphite": make_pbr("M_Graphite", COL_GRAPHITE, 0.55, 0.20),
    "silver":   make_pbr("M_Silver",   COL_SILVER,   0.30, 0.85),
    "silver_dk":make_pbr("M_SilverDk", COL_SILVER_DK,0.40, 0.85),
    "hp_grey":  make_pbr("M_HpGrey",   COL_HP_GREY,  0.40, 0.20),
    "hp_dark":  make_pbr("M_HpDark",   COL_HP_DARK,  0.45, 0.25),
    "amber":    make_pbr("M_Amber",    COL_AMBER,    0.22, 0.30,
                         emission=(*COL_AMBER[:3], 1.0), emission_strength=1.4),
    "gold":     make_pbr("M_Gold",     COL_GOLD,     0.32, 0.85),
    "red":      make_pbr("M_Red",      COL_RED,      0.28, 0.10),
    "cyan":     make_pbr("M_Cyan",     COL_CYAN,     0.25, 0.10,
                         emission=(*COL_CYAN[:3], 1.0), emission_strength=1.6),
    "cyan_dim": make_pbr("M_CyanDim",  COL_CYAN_DIM, 0.30, 0.10,
                         emission=(*COL_CYAN_DIM[:3], 1.0), emission_strength=0.6),
    "hose":     make_pbr("M_Hose",     COL_HOSE,     0.55, 0.10),
}

# ---------------------------------------------------------------------------
# Helpers
# ---------------------------------------------------------------------------
def assign(obj, key):
    mat = M[key]
    if obj.data.materials:
        obj.data.materials[0] = mat
    else:
        obj.data.materials.append(mat)

def smooth(obj):
    for p in obj.data.polygons:
        p.use_smooth = True

def add_bevel(obj, width=0.008, segments=2, angle_deg=40):
    m = obj.modifiers.new("Bevel", 'BEVEL')
    m.width = width
    m.segments = segments
    m.limit_method = 'ANGLE'
    m.angle_limit = math.radians(angle_deg)

def add_box(name, size, location, mat_key, bevel_w=0.008, segments=2,
            rotation=(0,0,0)):
    bpy.ops.mesh.primitive_cube_add(size=1.0, location=location, rotation=rotation)
    obj = bpy.context.active_object
    obj.name = name
    obj.scale = (size[0]/2, size[1]/2, size[2]/2)
    bpy.ops.object.transform_apply(location=False, rotation=False, scale=True)
    assign(obj, mat_key)
    if bevel_w > 0:
        add_bevel(obj, width=bevel_w, segments=segments)
    smooth(obj)
    return obj

def add_cyl(name, radius, depth, location, mat_key, rotation=(0,0,0),
            verts=24, bevel_w=0.003):
    bpy.ops.mesh.primitive_cylinder_add(vertices=verts, radius=radius, depth=depth,
                                        location=location, rotation=rotation)
    obj = bpy.context.active_object
    obj.name = name
    assign(obj, mat_key)
    if bevel_w > 0:
        add_bevel(obj, width=bevel_w, segments=2)
    smooth(obj)
    return obj

def add_torus(name, major_r, minor_r, location, mat_key, rotation=(0,0,0),
              major_seg=32, minor_seg=8):
    bpy.ops.mesh.primitive_torus_add(major_radius=major_r, minor_radius=minor_r,
                                     location=location, rotation=rotation,
                                     major_segments=major_seg,
                                     minor_segments=minor_seg)
    obj = bpy.context.active_object
    obj.name = name
    assign(obj, mat_key)
    smooth(obj)
    return obj

def add_wedge(name, w, d, h_front, h_back, location, mat_key, bevel_w=0.012):
    """Custom wedge mesh: tall at front (-Y), short at back (+Y)."""
    mesh = bpy.data.meshes.new(name)
    obj  = bpy.data.objects.new(name, mesh)
    bpy.context.collection.objects.link(obj)
    bm = bmesh.new()
    half_w, half_d = w/2, d/2
    # bottom 4
    v0 = bm.verts.new((-half_w, -half_d, 0))
    v1 = bm.verts.new(( half_w, -half_d, 0))
    v2 = bm.verts.new(( half_w,  half_d, 0))
    v3 = bm.verts.new((-half_w,  half_d, 0))
    # top 4 - sloped
    v4 = bm.verts.new((-half_w, -half_d, h_front))
    v5 = bm.verts.new(( half_w, -half_d, h_front))
    v6 = bm.verts.new(( half_w,  half_d, h_back))
    v7 = bm.verts.new((-half_w,  half_d, h_back))
    bm.faces.new([v0, v1, v2, v3])  # bottom
    bm.faces.new([v4, v5, v6, v7])  # top
    bm.faces.new([v0, v1, v5, v4])  # front
    bm.faces.new([v2, v3, v7, v6])  # back
    bm.faces.new([v1, v2, v6, v5])  # right
    bm.faces.new([v0, v4, v7, v3])  # left
    bm.normal_update()
    bm.to_mesh(mesh)
    bm.free()
    obj.location = location
    assign(obj, mat_key)
    if bevel_w > 0:
        add_bevel(obj, width=bevel_w, segments=2, angle_deg=50)
    smooth(obj)
    return obj

# ---------------------------------------------------------------------------
# Layout
# ---------------------------------------------------------------------------
# Pedestal cart
CART_BASE_H = 0.035          # base plate thickness
CART_FOOT_R = 0.030          # base "wing" lobe extent (we use a cross-shape)
COLUMN_H    = 0.62
TOP_PLATE_H = 0.030
TABLETOP_Z  = CART_BASE_H + COLUMN_H + TOP_PLATE_H  # ~0.685

# Body wedge
PLINTH_W, PLINTH_D, PLINTH_H = 0.50, 0.34, 0.10  # white lower box
WEDGE_FRONT_H = 0.16   # wedge top tall at front
WEDGE_BACK_H  = 0.045  # wedge top low at back
PLINTH_Z_BOT = TABLETOP_Z

# ---------------------------------------------------------------------------
# PEDESTAL CART  (winged base + column + winged top plate)
# ---------------------------------------------------------------------------
# Wing/cross-shaped white base — approximate with a wide thin plate + 4 lobes.
# Central plate
add_box("CartBaseCenter", (0.30, 0.30, CART_BASE_H),
        (0, 0, CART_BASE_H/2), "pearl_hi", bevel_w=0.018, segments=3)
# 4 wing lobes (extensions to corners)
for i, (x, y) in enumerate([(-0.21, -0.21), (0.21, -0.21),
                             (-0.21,  0.21), (0.21,  0.21)]):
    add_box(f"CartWing_{i}", (0.20, 0.20, CART_BASE_H),
            (x, y, CART_BASE_H/2), "pearl_hi", bevel_w=0.024, segments=3)

# Chrome bolts on the 4 lobes
for i, (x, y) in enumerate([(-0.27, -0.27), (0.27, -0.27),
                             (-0.27,  0.27), (0.27,  0.27)]):
    add_cyl(f"Bolt_{i}", 0.011, 0.008,
            (x, y, CART_BASE_H + 0.002), "silver",
            rotation=(0, 0, 0), verts=12, bevel_w=0.001)

# 4 wheels under the lobes
for i, (x, y) in enumerate([(-0.27, -0.27), (0.27, -0.27),
                             (-0.27,  0.27), (0.27,  0.27)]):
    add_cyl(f"Wheel_{i}", 0.020, 0.020,
            (x, y, 0.010), "graphite",
            rotation=(math.pi/2, 0, 0), verts=16, bevel_w=0.002)

# Silver column (square cross-section) with vertical black slot
add_box("Column", (0.085, 0.085, COLUMN_H),
        (0, 0, CART_BASE_H + COLUMN_H/2), "silver",
        bevel_w=0.006, segments=2)
# Vertical slot (dark groove on the front face)
add_box("ColumnSlot", (0.012, 0.002, COLUMN_H * 0.78),
        (0, -0.0432, CART_BASE_H + COLUMN_H/2), "graphite",
        bevel_w=0.0005)

# Top plate — wing-shaped wider than the body footprint
add_box("TopPlateCenter", (0.50, 0.30, TOP_PLATE_H),
        (0, 0, CART_BASE_H + COLUMN_H + TOP_PLATE_H/2),
        "pearl_hi", bevel_w=0.012, segments=3)
# Side wings on top plate (extending L/R)
for i, x in enumerate([-0.30, 0.30]):
    add_box(f"TopWing_{i}", (0.16, 0.22, TOP_PLATE_H),
            (x, 0, CART_BASE_H + COLUMN_H + TOP_PLATE_H/2),
            "pearl_hi", bevel_w=0.022, segments=3)

# ---------------------------------------------------------------------------
# MAIN BODY: white plinth + black wedge top + white front face
# ---------------------------------------------------------------------------
# Lower white plinth
add_box("Plinth", (PLINTH_W, PLINTH_D, PLINTH_H),
        (0, 0, PLINTH_Z_BOT + PLINTH_H/2),
        "pearl", bevel_w=0.018, segments=3)

# Black wedge top — tall at front, sloping down to the back
wedge = add_wedge("WedgeTop",
                  PLINTH_W - 0.005, PLINTH_D - 0.005,
                  WEDGE_FRONT_H, WEDGE_BACK_H,
                  (0, 0, PLINTH_Z_BOT + PLINTH_H),
                  "black", bevel_w=0.014)

# Body height for downstream references
BODY_TOTAL_TOP_FRONT = PLINTH_Z_BOT + PLINTH_H + WEDGE_FRONT_H

# Side ventilation grids (right + left, lower side panel area)
def make_vent_panel(side_x, name_prefix):
    # Recessed dark inset
    add_box(f"{name_prefix}_Inset", (0.005, 0.16, 0.06),
            (side_x, 0.04, PLINTH_Z_BOT + 0.045),
            "graphite", bevel_w=0.001)
    # 6x4 perforation grid
    rows_z = [-0.020, -0.005, 0.010, 0.025]
    cols_y = [-0.05, -0.025, 0.0, 0.025, 0.05, 0.075]
    for ci, cy in enumerate(cols_y):
        for ri, rz in enumerate(rows_z):
            add_cyl(f"{name_prefix}_d_{ci}_{ri}", 0.0028, 0.0018,
                    (side_x + (0.0012 if side_x > 0 else -0.0012),
                     cy, PLINTH_Z_BOT + 0.045 + rz),
                    "black", rotation=(0, math.pi/2, 0),
                    verts=8, bevel_w=0)

make_vent_panel( PLINTH_W/2 + 0.001, "VentR")
make_vent_panel(-PLINTH_W/2 - 0.001, "VentL")

# Side handle notch indication (a darker arched recess on right rear,
# approximated with a thin curved dark strip)
def make_handle_notch(side_x, name_prefix):
    # A horizontal slot near the top-rear of the wedge, suggesting carry handle
    notch_z = PLINTH_Z_BOT + PLINTH_H + 0.045
    add_box(f"{name_prefix}_Slot", (0.004, 0.08, 0.014),
            (side_x, 0.06, notch_z),
            "graphite", bevel_w=0.001)
    # Inner pearl ridge that gives the "handle" feel
    add_box(f"{name_prefix}_Ridge", (0.006, 0.07, 0.006),
            (side_x + (0.001 if side_x > 0 else -0.001),
             0.06, notch_z),
            "pearl_hi", bevel_w=0.001)

make_handle_notch( PLINTH_W/2 + 0.001, "HandleR")
make_handle_notch(-PLINTH_W/2 - 0.001, "HandleL")

# ---------------------------------------------------------------------------
# SCREEN  (mounted at the front-top of the wedge, tilting FORWARD)
# ---------------------------------------------------------------------------
SCREEN_TILT = math.radians(10)   # +X-axis rotation: top tilts forward (-Y)
SCREEN_W = 0.34
SCREEN_H = 0.30
BEZEL_THK = 0.022

# Pivot at the front-top edge of the plinth (where bottom of screen housing sits)
PIVOT_Y = -PLINTH_D/2 + 0.01
PIVOT_Z = PLINTH_Z_BOT + PLINTH_H + 0.005

# Rotate a "raw" upward-pointing screen housing so it leans forward
# Centre offset from pivot, before rotation: (y=0, z = SCREEN_H/2 + 0.02)
local_y0 = 0.0
local_z0 = SCREEN_H/2 + 0.02

# Apply forward tilt: positive tilt rotates point so its z-component moves to -y
def rot_x(y, z, t):
    """Rotate (y,z) by -t around x (positive t means top tilts forward, -y)."""
    cy = math.cos(-t) * y - math.sin(-t) * z
    cz = math.sin(-t) * y + math.cos(-t) * z
    return cy, cz

ry_off, rz_off = rot_x(local_y0, local_z0, SCREEN_TILT)
ry = PIVOT_Y + ry_off
rz = PIVOT_Z + rz_off

# Bezel housing
add_box("ScreenBezel",
        (SCREEN_W + BEZEL_THK*2, 0.030, SCREEN_H + BEZEL_THK*2),
        (0, ry, rz), "bezel",
        bevel_w=0.012, segments=3,
        rotation=(-SCREEN_TILT, 0, 0))

# Glossy panel forward of bezel face
panel_off_y, panel_off_z = rot_x(-0.018, 0.0, SCREEN_TILT)
add_box("ScreenPanel",
        (SCREEN_W, 0.006, SCREEN_H),
        (0, ry + panel_off_y, rz + panel_off_z),
        "screen", bevel_w=0.002, segments=2,
        rotation=(-SCREEN_TILT, 0, 0))

def screen_world(lx, lz, depth_in_front=0.022):
    """Map a local screen point (x, z) at given depth in front of bezel center."""
    dy, dz = rot_x(-depth_in_front, lz, SCREEN_TILT)
    return (lx, ry + dy, rz + dz)

# Two cyan glowing rings (HR Preset / HR Professional layout)
for i, lz in enumerate([0.06, -0.06]):
    cx, cy, cz = screen_world(0.0, lz, depth_in_front=0.024)
    add_torus(f"UI_Ring_{i}", 0.044, 0.0035,
              (cx, cy, cz), "cyan",
              rotation=(math.pi/2 - SCREEN_TILT, 0, 0),
              major_seg=36, minor_seg=6)
    cx2, cy2, cz2 = screen_world(0.0, lz, depth_in_front=0.020)
    add_cyl(f"UI_Disk_{i}", 0.038, 0.003,
            (cx2, cy2, cz2), "cyan_dim",
            rotation=(math.pi/2 - SCREEN_TILT, 0, 0),
            verts=32, bevel_w=0)

# Top status bar
sb = screen_world(0.0, 0.122, depth_in_front=0.020)
add_box("UI_StatusBar", (0.28, 0.002, 0.012),
        sb, "cyan_dim", bevel_w=0.0005,
        rotation=(-SCREEN_TILT, 0, 0))

# ---------------------------------------------------------------------------
# FRONT LOWER PANEL  (silver oval inset with key switch + emergency stop)
# ---------------------------------------------------------------------------
FRONT_Y = -PLINTH_D/2 - 0.001
PANEL_Z = PLINTH_Z_BOT + PLINTH_H/2

# Silver oval/recessed plate (approximated with a wide flat squashed cylinder)
add_cyl("FrontOvalPlate", 0.040, 0.012,
        (0, FRONT_Y - 0.003, PANEL_Z),
        "silver_dk", rotation=(math.pi/2, 0, 0),
        verts=32, bevel_w=0.002)
# Stretch it horizontally
bpy.context.active_object.scale = (2.4, 1.0, 1.0)
bpy.ops.object.transform_apply(location=False, rotation=False, scale=True)

# Inner darker recess
add_cyl("FrontOvalInner", 0.034, 0.014,
        (0, FRONT_Y - 0.008, PANEL_Z),
        "graphite", rotation=(math.pi/2, 0, 0),
        verts=32, bevel_w=0.001)
bpy.context.active_object.scale = (2.4, 1.0, 1.0)
bpy.ops.object.transform_apply(location=False, rotation=False, scale=True)

# Key switch (left side of oval)
KEY_X = -0.045
add_cyl("KeyCollar", 0.018, 0.014,
        (KEY_X, FRONT_Y - 0.012, PANEL_Z),
        "silver", rotation=(math.pi/2, 0, 0),
        verts=24, bevel_w=0.001)
add_cyl("KeyInset", 0.012, 0.016,
        (KEY_X, FRONT_Y - 0.016, PANEL_Z),
        "graphite", rotation=(math.pi/2, 0, 0),
        verts=20, bevel_w=0.0005)
add_box("KeySlot", (0.010, 0.002, 0.0015),
        (KEY_X, FRONT_Y - 0.020, PANEL_Z),
        "black", bevel_w=0)
# Tiny key (suggested by a small cyl hanging below)
add_cyl("KeyShaft", 0.0012, 0.020,
        (KEY_X, FRONT_Y - 0.018, PANEL_Z - 0.018),
        "silver", rotation=(0, 0, 0), verts=8, bevel_w=0)
add_box("KeyBow", (0.012, 0.001, 0.012),
        (KEY_X, FRONT_Y - 0.018, PANEL_Z - 0.034),
        "silver", bevel_w=0.001)

# Emergency stop (right side of oval)
EMG_X = 0.045
add_cyl("EmgCollar", 0.022, 0.012,
        (EMG_X, FRONT_Y - 0.010, PANEL_Z),
        "silver", rotation=(math.pi/2, 0, 0),
        verts=28, bevel_w=0.001)
add_cyl("EmgRed", 0.018, 0.020,
        (EMG_X, FRONT_Y - 0.018, PANEL_Z),
        "red", rotation=(math.pi/2, 0, 0),
        verts=28, bevel_w=0.0025)

# ---------------------------------------------------------------------------
# HANDPIECE DOCK  (right side, attached to body wedge)
# ---------------------------------------------------------------------------
DOCK_X =  PLINTH_W/2 + 0.040
DOCK_Y =  0.05
DOCK_Z =  PLINTH_Z_BOT + PLINTH_H + 0.04

# Bracket arm extending from body
add_box("DockArm", (0.06, 0.06, 0.05),
        (DOCK_X - 0.02, DOCK_Y, DOCK_Z),
        "pearl_hi", bevel_w=0.008)

# Cup
add_cyl("DockCup", 0.026, 0.05,
        (DOCK_X, DOCK_Y, DOCK_Z + 0.02),
        "pearl_hi", verts=22, bevel_w=0.003)
add_cyl("DockInner", 0.020, 0.040,
        (DOCK_X, DOCK_Y, DOCK_Z + 0.027),
        "graphite", verts=20, bevel_w=0.001)

# ---------------------------------------------------------------------------
# HANDPIECE  (rounded broad-top wedge head, white handle, mini LCD)
# ---------------------------------------------------------------------------
hp_base_x = DOCK_X
hp_base_y = DOCK_Y
hp_base_z = DOCK_Z + 0.06
HP_TILT_X = math.radians(-6)   # tilt slightly forward (toward camera)

# Handle (white cylinder)
add_cyl("HpHandle", 0.018, 0.08,
        (hp_base_x, hp_base_y, hp_base_z + 0.04),
        "pearl_hi", rotation=(HP_TILT_X, 0, 0),
        verts=22, bevel_w=0.002)
# Grey grip ring at base of handle
add_cyl("HpGrip", 0.0195, 0.020,
        (hp_base_x, hp_base_y, hp_base_z + 0.012),
        "hp_dark", rotation=(HP_TILT_X, 0, 0),
        verts=22, bevel_w=0.001)

# Head — broader at the top, narrower at the bottom (reverse-trapezoid front profile).
# Approximate with two stacked boxes that produce a rounded broad-top look.
HEAD_Z = hp_base_z + 0.105
# Bottom (narrower) section of head
add_box("HpHead_Lower", (0.045, 0.045, 0.020),
        (hp_base_x, hp_base_y, HEAD_Z - 0.020),
        "hp_grey", bevel_w=0.010, segments=3,
        rotation=(HP_TILT_X, 0, 0))
# Top (broader) section of head
head_top = add_box("HpHead_Upper", (0.060, 0.055, 0.044),
                   (hp_base_x, hp_base_y, HEAD_Z + 0.005),
                   "hp_grey", bevel_w=0.014, segments=3,
                   rotation=(HP_TILT_X, 0, 0))

# Silver back-cap on rear of head (the metallic curved back from photos)
add_box("HpHeadBack", (0.062, 0.012, 0.040),
        (hp_base_x, hp_base_y + 0.024, HEAD_Z + 0.005),
        "silver", bevel_w=0.008, segments=3,
        rotation=(HP_TILT_X, 0, 0))

# Treatment window on the front face of head (front = -Y)
win_y = hp_base_y - 0.030
add_box("HpWindowGold", (0.026, 0.002, 0.020),
        (hp_base_x, win_y, HEAD_Z + 0.002),
        "silver", bevel_w=0.001,
        rotation=(HP_TILT_X, 0, 0))
add_box("HpWindowAmber", (0.020, 0.003, 0.014),
        (hp_base_x, win_y - 0.001, HEAD_Z + 0.002),
        "amber", bevel_w=0.0005,
        rotation=(HP_TILT_X, 0, 0))

# Tiny LCD on the back face of head (cyan glow, no text)
lcd_y = hp_base_y + 0.029
add_box("HpLCD", (0.020, 0.002, 0.014),
        (hp_base_x, lcd_y, HEAD_Z + 0.005),
        "cyan_dim", bevel_w=0.0005,
        rotation=(HP_TILT_X, 0, 0))
add_box("HpLCDFrame", (0.024, 0.002, 0.018),
        (hp_base_x, lcd_y - 0.0005, HEAD_Z + 0.005),
        "graphite", bevel_w=0.0005,
        rotation=(HP_TILT_X, 0, 0))

# Trigger button on handle (small disk on the front)
add_cyl("HpTrigger", 0.006, 0.004,
        (hp_base_x, hp_base_y - 0.020, hp_base_z + 0.04),
        "hp_dark", rotation=(math.pi/2, 0, 0),
        verts=14, bevel_w=0.0005)

# ---------------------------------------------------------------------------
# HOSE  (loops down, under, and back into body)
# ---------------------------------------------------------------------------
def make_hose():
    cd = bpy.data.curves.new("HoseCurve", type='CURVE')
    cd.dimensions = '3D'
    cd.bevel_depth = 0.011
    cd.bevel_resolution = 3
    cd.resolution_u = 8
    spline = cd.splines.new('BEZIER')
    points = [
        (hp_base_x, hp_base_y, hp_base_z - 0.005),                           # under handle
        (hp_base_x + 0.04, hp_base_y + 0.06, hp_base_z - 0.10),              # arc out & back
        (hp_base_x - 0.04, hp_base_y + 0.10, hp_base_z - 0.22),              # drop down
        (hp_base_x - 0.18, hp_base_y + 0.04, hp_base_z - 0.32),              # under cart
        (hp_base_x - 0.10, hp_base_y - 0.10, hp_base_z - 0.42),              # loop forward
    ]
    spline.bezier_points.add(len(points) - 1)
    for i, co in enumerate(points):
        bp = spline.bezier_points[i]
        bp.co = co
        bp.handle_left_type = 'AUTO'
        bp.handle_right_type = 'AUTO'
    obj = bpy.data.objects.new("Hose", cd)
    bpy.context.collection.objects.link(obj)
    assign(obj, "hose")
    return obj

make_hose()

# ---------------------------------------------------------------------------
# Lights (preview only)
# ---------------------------------------------------------------------------
bpy.ops.object.light_add(type='AREA', location=(1.5, -1.5, 1.8))
bpy.context.active_object.data.energy = 250
bpy.context.active_object.data.size = 1.5
bpy.ops.object.light_add(type='AREA', location=(-1.2, -0.6, 1.3))
bpy.context.active_object.data.energy = 100
bpy.context.active_object.data.size = 1.5

# ---------------------------------------------------------------------------
# Export GLB
# ---------------------------------------------------------------------------
os.makedirs(os.path.dirname(OUTPUT_PATH), exist_ok=True)

bpy.ops.object.select_all(action='DESELECT')
for o in bpy.data.objects:
    if o.type in {'MESH', 'CURVE'}:
        o.select_set(True)

bpy.ops.export_scene.gltf(
    filepath=OUTPUT_PATH,
    export_format='GLB',
    use_selection=True,
    export_apply=True,
    export_yup=True,
    export_cameras=False,
    export_lights=False,
    export_materials='EXPORT',
    export_image_format='AUTO',
    export_draco_mesh_compression_enable=False,
)

print(f"Exported: {OUTPUT_PATH}")
if os.path.exists(OUTPUT_PATH):
    size_kb = os.path.getsize(OUTPUT_PATH) / 1024.0
    print(f"Size: {size_kb:.1f} KB ({size_kb/1024:.2f} MB)")
