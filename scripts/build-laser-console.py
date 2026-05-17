"""
Aurum Nova - Diode Laser Console (tabletop unit, NO cart)
Hard-surface parametric model from real reference photos + measured dims.
Premium-medical look. No logos / no baked text (screen UI is geometry glow).

Measured spec (cm -> m):
  Console body ........ ~40 H x 38 W x 52 D  (deep rounded box, flat top)
  Screen frame ........ 31 H x 23 W x 4 thick, tilted ~20deg BACKWARD
  Visible screen ...... 25 H x 17 W
  Handpiece ........... 26 total H, head 8w x 8h x 11d, handle ~4 dia
  Cable ............... grey corrugated, ~2.5 dia, hangs in a U/coil

The screen is built UPRIGHT on an Empty hinge at the body's top-front edge,
then the hinge is tilted back 20deg and the transform is baked into the
parts, so the screen base stays glued to the body (no floating).

Run:
  /Applications/Blender.app/Contents/MacOS/Blender --background \
      --python scripts/build-laser-console.py
"""

import bpy
import bmesh
import math
import os

OUTPUT_PATH = "/Users/andresalcantara/Documents/aurumova-site/public/models/aurum-laser-machine.glb"

# ---------------------------------------------------------------------------
# Palette
# ---------------------------------------------------------------------------
COL_PEARL     = (0.940, 0.933, 0.918, 1.0)
COL_PEARL_HI  = (0.965, 0.959, 0.946, 1.0)
COL_BLACK     = (0.018, 0.020, 0.024, 1.0)
COL_SCREEN    = (0.010, 0.012, 0.018, 1.0)
COL_GRAPHITE  = (0.070, 0.074, 0.084, 1.0)
COL_GRAPHITE2 = (0.130, 0.136, 0.146, 1.0)
COL_SILVER    = (0.680, 0.690, 0.705, 1.0)
COL_SILVER_DK = (0.420, 0.430, 0.442, 1.0)
COL_HP_GREY   = (0.770, 0.776, 0.786, 1.0)
COL_AMBER     = (0.960, 0.650, 0.190, 1.0)
COL_RED       = (0.720, 0.090, 0.075, 1.0)
COL_CYAN      = (0.320, 0.770, 0.960, 1.0)
COL_CYAN_DIM  = (0.140, 0.360, 0.480, 1.0)
COL_HOSE      = (0.540, 0.546, 0.560, 1.0)

# ---------------------------------------------------------------------------
# Reset scene
# ---------------------------------------------------------------------------
bpy.ops.object.select_all(action='SELECT')
bpy.ops.object.delete(use_global=False)
for c in (bpy.data.meshes, bpy.data.materials, bpy.data.curves):
    for b in list(c):
        c.remove(b)

# ---------------------------------------------------------------------------
# Materials
# ---------------------------------------------------------------------------
def make_pbr(name, color, roughness=0.5, metallic=0.0, coat=0.0,
             emission=None, emission_strength=0.0):
    mat = bpy.data.materials.new(name)
    mat.use_nodes = True
    b = mat.node_tree.nodes.get("Principled BSDF")
    b.inputs["Base Color"].default_value = color
    b.inputs["Roughness"].default_value = roughness
    b.inputs["Metallic"].default_value = metallic
    if "Coat Weight" in b.inputs:
        b.inputs["Coat Weight"].default_value = coat
    if emission is not None:
        if "Emission Color" in b.inputs:
            b.inputs["Emission Color"].default_value = emission
        elif "Emission" in b.inputs:
            b.inputs["Emission"].default_value = emission
        if "Emission Strength" in b.inputs:
            b.inputs["Emission Strength"].default_value = emission_strength
    return mat

M = {
    "pearl":    make_pbr("M_Pearl",    COL_PEARL,    0.44, 0.0, coat=0.10),
    "pearl_hi": make_pbr("M_PearlHi",  COL_PEARL_HI, 0.36, 0.0, coat=0.12),
    "black":    make_pbr("M_Black",    COL_BLACK,    0.22, 0.0, coat=0.06),
    "screen":   make_pbr("M_Screen",   COL_SCREEN,   0.11, 0.0, coat=0.22),
    "graphite": make_pbr("M_Graphite", COL_GRAPHITE, 0.55, 0.10),
    "graphite2":make_pbr("M_Graphite2",COL_GRAPHITE2,0.62, 0.15),
    "silver":   make_pbr("M_Silver",   COL_SILVER,   0.24, 0.95),
    "silver_dk":make_pbr("M_SilverDk", COL_SILVER_DK,0.36, 0.90),
    "hp_grey":  make_pbr("M_HpGrey",   COL_HP_GREY,  0.32, 0.45),
    "amber":    make_pbr("M_Amber",    COL_AMBER,    0.18, 0.30,
                         emission=(*COL_AMBER[:3], 1.0), emission_strength=1.5),
    "red":      make_pbr("M_Red",      (0.780, 0.075, 0.060, 1.0),
                         0.16, 0.05, coat=0.55),
    "cyan":     make_pbr("M_Cyan",     COL_CYAN,     0.25, 0.0,
                         emission=(*COL_CYAN[:3], 1.0), emission_strength=1.8),
    "led":      make_pbr("M_Led",      (0.45, 0.82, 1.0, 1.0), 0.20, 0.0,
                         emission=(0.36, 0.78, 1.0, 1.0), emission_strength=3.4),
    "cyan_dim": make_pbr("M_CyanDim",  COL_CYAN_DIM, 0.30, 0.0,
                         emission=(*COL_CYAN_DIM[:3], 1.0), emission_strength=0.7),
    "ui":       make_pbr("M_UI",       COL_CYAN,     0.28, 0.0,
                         emission=(*COL_CYAN[:3], 1.0), emission_strength=1.4),
    "hose":     make_pbr("M_Hose",     COL_HOSE,     0.58, 0.05),
}

# ---------------------------------------------------------------------------
# Helpers
# ---------------------------------------------------------------------------
def assign(o, k):
    if o.data.materials:
        o.data.materials[0] = M[k]
    else:
        o.data.materials.append(M[k])

def smooth(o):
    for p in o.data.polygons:
        p.use_smooth = True

def bevel(o, w=0.008, seg=2, ang=44):
    m = o.modifiers.new("Bevel", 'BEVEL')
    m.width = w
    m.segments = seg
    m.limit_method = 'ANGLE'
    m.angle_limit = math.radians(ang)

def box(name, size, loc, key, bw=0.008, seg=2, rot=(0, 0, 0)):
    # primitive_cube_add(size=1.0) -> 1.0 m cube; scale by `size` for true dims
    bpy.ops.mesh.primitive_cube_add(size=1.0, location=loc, rotation=rot)
    o = bpy.context.active_object
    o.name = name
    o.scale = (size[0], size[1], size[2])
    bpy.ops.object.transform_apply(location=False, rotation=False, scale=True)
    assign(o, key)
    if bw > 0:
        bevel(o, bw, seg)
    smooth(o)
    return o

def cyl(name, r, d, loc, key, rot=(0, 0, 0), verts=24, bw=0.002):
    bpy.ops.mesh.primitive_cylinder_add(vertices=verts, radius=r, depth=d,
                                        location=loc, rotation=rot)
    o = bpy.context.active_object
    o.name = name
    assign(o, key)
    if bw > 0:
        bevel(o, bw, 2)
    smooth(o)
    return o

def torus(name, R, r, loc, key, rot=(0, 0, 0), mseg=28, nseg=6):
    bpy.ops.mesh.primitive_torus_add(major_radius=R, minor_radius=r,
                                     location=loc, rotation=rot,
                                     major_segments=mseg, minor_segments=nseg)
    o = bpy.context.active_object
    o.name = name
    assign(o, key)
    smooth(o)
    return o

def rbox(name, w, d, h, loc, key, bw=0.012, seg=3):
    """Rounded box anchored by its CENTER at loc."""
    return box(name, (w, d, h), loc, key, bw=bw, seg=seg)

def poly_curve(name, pts, depth, key, res=2, corrugate=0.0):
    """POLY curve tube. corrugate>0 alternates per-point radius to give a
    ribbed / corrugated silhouette cheaply (no extra meshing cost)."""
    cd = bpy.data.curves.new(name + "C", type='CURVE')
    cd.dimensions = '3D'
    cd.bevel_depth = depth
    cd.bevel_resolution = res
    cd.resolution_u = 6
    sp = cd.splines.new('POLY')
    sp.points.add(len(pts) - 1)
    for i, p in enumerate(pts):
        sp.points[i].co = (p[0], p[1], p[2], 1.0)
        if corrugate > 0.0:
            sp.points[i].radius = 1.0 if (i % 2 == 0) else (1.0 - corrugate)
    o = bpy.data.objects.new(name, cd)
    bpy.context.collection.objects.link(o)
    assign(o, key)
    return o

def apply_all_mods(o):
    bpy.ops.object.select_all(action='DESELECT')
    bpy.context.view_layer.objects.active = o
    o.select_set(True)
    for m in list(o.modifiers):
        try:
            bpy.ops.object.modifier_apply(modifier=m.name)
        except Exception as e:
            print(f"[aurum] modifier_apply {o.name}/{m.name}: {e}")

def boolean_diff(target, cutter):
    md = target.modifiers.new("Bool", 'BOOLEAN')
    md.operation = 'DIFFERENCE'
    md.object = cutter
    md.solver = 'EXACT'

# ---------------------------------------------------------------------------
# Dimensions (m).  Front face = -Y.  Up = +Z.  Origin: footprint center, z=0.
# ---------------------------------------------------------------------------
BW, BD, BH = 0.38, 0.52, 0.255          # body W(X) D(Y) H(Z) - flat top
FRONT = -BD / 2

# ---- white body: clean deep rounded box ----
body = rbox("Body", BW, BD, BH, (0, 0, BH / 2), "pearl", bw=0.014, seg=3)

# ---- RIGHT side (+X) recessed ventilation, cut INTO the body ----
VX = BW / 2
# soft-cornered pocket cutter (consumed by the boolean, then deleted)
cutter = box("_VentCut", (0.040, 0.170, 0.092), (VX + 0.004, 0.022, 0.072),
             "graphite", bw=0.006, seg=2)
boolean_diff(body, cutter)
apply_all_mods(body)                       # bake bevel + boolean into Body
bpy.data.objects.remove(cutter, do_unlink=True)

# recessed panel at the bottom of the pocket (body-coloured, in shadow)
RB = VX - 0.013
box("VentPanel", (0.006, 0.156, 0.080), (RB - 0.003, 0.022, 0.072),
    "pearl", bw=0.001)
# thin graphite frame around the opening (defines the recess edge cleanly)
for (sy, sz, oy, oz) in [(0.168, 0.006, 0.022, 0.116),
                          (0.168, 0.006, 0.022, 0.028),
                          (0.006, 0.094, -0.064, 0.072),
                          (0.006, 0.094, 0.108, 0.072)]:
    box(f"VentFrame{oy}{oz}", (0.010, sy, sz), (VX - 0.002, oy, oz),
        "graphite", bw=0.001)
# clean, ordered perforation grid (small dark dots, slightly proud of panel)
DX = RB + 0.0015
gy = [-0.050 + i * 0.0166 for i in range(9)]
gz = [0.040 + j * 0.0150 for j in range(5)]
for ci, cy in enumerate(gy):
    for ri, rz in enumerate(gz):
        cyl(f"Vd{ci}{ri}", 0.0027, 0.004, (DX, cy, rz), "graphite",
            rot=(0, math.pi / 2, 0), verts=10, bw=0)

# ---- subtle case seams (lid/base parting line + top-lid line) ----
SZ1 = BH * 0.42
box("SeamFront", (BW * 1.0008, 0.0035, 0.004), (0, FRONT + 0.0006, SZ1),
    "graphite", bw=0.0006)
box("SeamBack", (BW * 1.0008, 0.0035, 0.004), (0, BD / 2 - 0.0006, SZ1),
    "graphite", bw=0.0006)
box("SeamLeft", (0.0035, BD * 1.0008, 0.004), (-BW / 2 + 0.0006, 0, SZ1),
    "graphite", bw=0.0006)
# top-lid hairline near the upper edge (front + sides only)
box("LidFront", (BW * 1.0006, 0.0030, 0.0035), (0, FRONT + 0.0006, BH - 0.020),
    "graphite", bw=0.0005)
box("LidLeft", (0.0030, BD * 0.86, 0.0035),
    (-BW / 2 + 0.0006, -0.02, BH - 0.020), "graphite", bw=0.0005)
box("LidRight", (0.0030, BD * 0.50, 0.0035),
    (BW / 2 - 0.0006, FRONT + 0.14, BH - 0.020), "graphite", bw=0.0005)

# ---------------------------------------------------------------------------
# SCREEN ASSEMBLY  - placed DIRECTLY at world coords (no parenting/bake).
#   Local screen frame: lx=width, ly=thickness(+ = toward back), lz=up the
#   panel from the hinge.  Transform tilts the top ~20deg toward +Y (back).
# ---------------------------------------------------------------------------
SCR_W, SCR_H, SCR_T = 0.23, 0.31, 0.040
TILT = math.radians(20)
cP, sP = math.cos(TILT), math.sin(TILT)

# hinge anchor: on the body's TOP surface, front third
AX, AY, AZ = 0.0, FRONT + 0.125, BH

def S(lx, ly, lz):
    """Local screen-frame point -> world. Top of panel leans toward +Y."""
    return (AX + lx,
            AY + ly * cP + lz * sP,
            AZ - ly * sP + lz * cP)

SROT = (-TILT, 0.0, 0.0)   # box/cyl orientation matching the tilt

# neck/riser bridging body top -> bezel (spans local lz ~ -0.02 .. 0.07)
box("ScreenNeck", (SCR_W * 0.80, 0.090, 0.090), S(0, 0.0, 0.026),
    "black", bw=0.010, seg=3, rot=SROT)
# main bezel slab (local bottom lz=0)
box("ScreenBezel", (SCR_W, SCR_T, SCR_H), S(0, 0.004, SCR_H / 2 + 0.005),
    "black", bw=0.012, seg=3, rot=SROT)
# glossy black glass flush on the FRONT (-ly) face - thin bezel frame only
box("ScreenGlass", (SCR_W - 0.013, 0.006, SCR_H - 0.016),
    S(0, -SCR_T / 2 - 0.0008, SCR_H / 2 + 0.005), "screen",
    bw=0.002, seg=2, rot=SROT)

GLZ = SCR_H / 2 + 0.005                  # glass center, local up
GLY = -SCR_T / 2 - 0.006                 # just in front of the glass

# two HR ring buttons (geometry glow, NO text)
for i, dz in enumerate((0.052, -0.052)):
    torus(f"UIring{i}", 0.034, 0.0026, S(0, GLY, GLZ + dz), "cyan",
          rot=(math.pi / 2 - TILT, 0, 0), mseg=40, nseg=6)
    cyl(f"UIfill{i}", 0.029, 0.0022, S(0, GLY + 0.001, GLZ + dz),
        "cyan_dim", rot=(math.pi / 2 - TILT, 0, 0), verts=36, bw=0)
# top status bar + small settings dot (a touch larger / brighter)
box("UIstatus", (0.156, 0.0035, 0.014), S(0, GLY, GLZ + 0.118),
    "ui", bw=0.0005, rot=SROT)
cyl("UIgear", 0.0085, 0.0035, S(0.084, GLY, GLZ + 0.118), "ui",
    rot=(math.pi / 2 - TILT, 0, 0), verts=20, bw=0)

# ---------------------------------------------------------------------------
# FRONT LOWER PANEL  - silver oval recess: key switch + emergency stop
# ---------------------------------------------------------------------------
FY = FRONT - 0.001
PZ = 0.066

p = cyl("FrontPlate", 0.040, 0.010, (0, FY - 0.002, PZ), "silver_dk",
        rot=(math.pi / 2, 0, 0), verts=32, bw=0.002)
p.scale = (2.6, 1.0, 1.0)
bpy.ops.object.transform_apply(location=False, rotation=False, scale=True)
q = cyl("FrontPlateIn", 0.033, 0.012, (0, FY - 0.006, PZ), "graphite",
        rot=(math.pi / 2, 0, 0), verts=32, bw=0.001)
q.scale = (2.5, 1.0, 1.0)
bpy.ops.object.transform_apply(location=False, rotation=False, scale=True)

KX = -0.050
cyl("KeyCollar", 0.016, 0.012, (KX, FY - 0.009, PZ), "silver",
    rot=(math.pi / 2, 0, 0), verts=24, bw=0.001)
cyl("KeyCore", 0.010, 0.016, (KX, FY - 0.013, PZ), "graphite",
    rot=(math.pi / 2, 0, 0), verts=20, bw=0.0005)
box("KeySlot", (0.008, 0.0016, 0.0013), (KX, FY - 0.019, PZ), "black", bw=0)
cyl("KeyShaft", 0.0011, 0.020, (KX, FY - 0.018, PZ - 0.019), "silver",
    verts=8, bw=0)
box("KeyBow", (0.012, 0.0014, 0.012), (KX, FY - 0.018, PZ - 0.034),
    "silver", bw=0.001)

EX = 0.050
cyl("EmgCollar", 0.021, 0.009, (EX, FY - 0.007, PZ), "silver",
    rot=(math.pi / 2, 0, 0), verts=28, bw=0.001)
cyl("EmgRed", 0.0175, 0.016, (EX, FY - 0.014, PZ), "red",
    rot=(math.pi / 2, 0, 0), verts=28, bw=0.003)
cyl("EmgTop", 0.0175, 0.004, (EX, FY - 0.022, PZ), "red",
    rot=(math.pi / 2, 0, 0), verts=28, bw=0.004)

# (Side ventilation is built recessed into the body up top, near the Body.)

# ---------------------------------------------------------------------------
# REAR (+Y face): two circular fan guards + lower connector panel
# ---------------------------------------------------------------------------
RY = BD / 2 + 0.001
def fan(cx, cz, prefix):
    cyl(f"{prefix}Recess", 0.045, 0.010, (cx, RY - 0.006, cz), "graphite",
        rot=(math.pi / 2, 0, 0), verts=32, bw=0.001)
    torus(f"{prefix}Rim", 0.044, 0.004, (cx, RY, cz), "graphite2",
          rot=(math.pi / 2, 0, 0), mseg=32, nseg=6)
    cyl(f"{prefix}Hub", 0.009, 0.012, (cx, RY - 0.002, cz), "graphite2",
        rot=(math.pi / 2, 0, 0), verts=14, bw=0)
    for k in range(6):
        box(f"{prefix}Sp{k}", (0.0035, 0.004, 0.084), (cx, RY - 0.002, cz),
            "graphite2", bw=0, rot=(0, k * math.pi / 3.0, 0))

fan(-0.082, 0.150, "FanL")
fan(0.082, 0.150, "FanR")
box("RearPanel", (0.27, 0.010, 0.055), (0, RY - 0.004, 0.052), "graphite",
    bw=0.002)
box("RearIEC", (0.034, 0.012, 0.024), (-0.090, RY + 0.002, 0.052),
    "graphite2", bw=0.001)
box("RearSw", (0.016, 0.012, 0.018), (-0.040, RY + 0.002, 0.052),
    "graphite2", bw=0.001)
cyl("RearP1", 0.009, 0.014, (0.045, RY, 0.052), "graphite2",
    rot=(math.pi / 2, 0, 0), verts=14, bw=0.0005)
cyl("RearP2", 0.009, 0.014, (0.082, RY, 0.052), "graphite2",
    rot=(math.pi / 2, 0, 0), verts=14, bw=0.0005)

# ---------------------------------------------------------------------------
# HANDPIECE HOLSTER  - C-clamp bracket on the right side
# ---------------------------------------------------------------------------
HX = BW / 2 + 0.052
HY = 0.00
HZ = BH - 0.020
box("HolBack", (0.030, 0.075, 0.110), (BW / 2 + 0.015, HY, HZ + 0.045),
    "pearl_hi", bw=0.008)
box("HolLower", (0.060, 0.072, 0.022), (HX, HY, HZ + 0.006),
    "pearl_hi", bw=0.008)
box("HolUpper", (0.060, 0.072, 0.020), (HX, HY, HZ + 0.090),
    "pearl_hi", bw=0.008)
box("HolScreen", (0.020, 0.003, 0.014), (HX, HY - 0.038, HZ + 0.090),
    "cyan_dim", bw=0.0005)

# ---------------------------------------------------------------------------
# HANDPIECE  - chunky metal head, short thick white handle, gold window
#   docked head-UP, slight forward lean. total ~0.26, head 0.08x0.08x0.11
# ---------------------------------------------------------------------------
HPX = HX
HPY = HY
hb = HZ - 0.030               # handle base z
TX = math.radians(-8)

cyl("HpHandle", 0.021, 0.082, (HPX, HPY, hb + 0.041), "pearl_hi",
    rot=(TX, 0, 0), verts=26, bw=0.003)
cyl("HpCollar", 0.0225, 0.020, (HPX, HPY, hb + 0.006), "hp_grey",
    rot=(TX, 0, 0), verts=26, bw=0.0015)
bt = cyl("HpButton", 0.0075, 0.004, (HPX, HPY - 0.020, hb + 0.050),
         "graphite2", rot=(math.pi / 2, 0, 0), verts=16, bw=0.0006)
bt.scale = (1.0, 1.0, 1.8)
bpy.ops.object.transform_apply(location=False, rotation=False, scale=True)

HZc = hb + 0.120
box("HpNeck", (0.050, 0.056, 0.032), (HPX, HPY, HZc - 0.048), "hp_grey",
    bw=0.014, seg=3, rot=(TX, 0, 0))
# main head: softer block (bigger bevel) + a rounded barrel crown so it
# no longer reads as a plain box
box("HpHead", (0.072, 0.100, 0.066), (HPX, HPY + 0.004, HZc + 0.010),
    "hp_grey", bw=0.024, seg=4, rot=(TX, 0, 0))
cyl("HpCrown", 0.036, 0.070, (HPX, HPY + 0.006, HZc + 0.044), "hp_grey",
    rot=(TX, math.pi / 2, 0), verts=28, bw=0.004)
# bright blue LED strip down the front-outer edge of the head
box("HpLED", (0.007, 0.016, 0.052), (HPX + 0.035, HPY - 0.040, HZc + 0.024),
    "led", bw=0.0015, rot=(TX, 0, 0))
box("HpLEDtop", (0.050, 0.014, 0.006), (HPX, HPY - 0.040, HZc + 0.050),
    "led", bw=0.0010, rot=(TX, 0, 0))
# gold sapphire optical window on the FRONT (-Y) face
box("HpWinRim", (0.042, 0.008, 0.034), (HPX, HPY - 0.056, HZc - 0.004),
    "silver_dk", bw=0.0012, rot=(TX, 0, 0))
box("HpWinGold", (0.033, 0.006, 0.025), (HPX, HPY - 0.060, HZc - 0.004),
    "amber", bw=0.0009, rot=(TX, 0, 0))

# ---------------------------------------------------------------------------
# CABLE  (corrugated grey ~2.5 dia). Natural U from the handpiece down the
# FRONT-right and into a grommet. Stays off/forward of the recessed vent and
# never dips below the base.
# ---------------------------------------------------------------------------
W = [
    (0.242,  0.012, 0.196),                 # leave handpiece base
    (0.252, -0.020, 0.168),                 # arc forward, still high
    (0.254, -0.075, 0.130),                 # past the vent's front edge
    (0.250, -0.115, 0.092),                 # descend in front of lower-right
    (0.242, -0.150, 0.058),                 # into the U
    (0.224, -0.165, 0.046),                 # lowest point (well above base)
    (0.205, -0.170, 0.050),                 # swing toward the body
    (0.190, -0.198, 0.055),                 # near the front-right corner
    (BW / 2 - 0.004, FRONT + 0.060, 0.054),  # into the grommet
]
pts = []
for i in range(len(W) - 1):
    a, b = W[i], W[i + 1]
    for s in range(5):
        t = s / 5.0
        pts.append((a[0] + (b[0] - a[0]) * t,
                    a[1] + (b[1] - a[1]) * t,
                    a[2] + (b[2] - a[2]) * t))
pts.append(W[-1])
poly_curve("Cable", pts, 0.0125, "hose", res=2, corrugate=0.24)
cyl("CableGrommet", 0.016, 0.012, (BW / 2 - 0.001, FRONT + 0.060, 0.054),
    "graphite", rot=(0, math.pi / 2, 0), verts=18, bw=0.002)

# ---------------------------------------------------------------------------
# Export GLB  (no Draco -> no runtime decoder CDN dependency; model is tiny)
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

tri = sum(len(o.data.polygons) for o in bpy.data.objects if o.type == 'MESH')
print(f"[aurum] meshes: {sum(1 for o in bpy.data.objects if o.type=='MESH')}, "
      f"approx quad/tri faces: {tri}")
if os.path.exists(OUTPUT_PATH):
    kb = os.path.getsize(OUTPUT_PATH) / 1024.0
    print(f"[aurum] exported {OUTPUT_PATH}")
    print(f"[aurum] size: {kb:.1f} KB ({kb/1024:.2f} MB)")
