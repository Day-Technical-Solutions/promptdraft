/** @format */

export enum AspectRatio {
  SQUARE = "--ar 1:1",
  WIDE = "--ar 16:9",
  PORTRAIT = "--ar 9:16",
  PANORAMIC = "--ar 21:9",
  CUSTOM = "--ar Custom",
}

export enum CameraView {
  NORMAL = "normal view",
  ZOOM = "zoom view",
  PANORAMIC = "panoramic view",
  BOKEH = "bokeh",
}

export enum CameraLens {
  STANDARD = "standard lens",
  PRIME = "prime lens",
  MACRO = "macro lens",
  WIDE_ANGLE = "wide angle lens",
  TELEPHOTO = "telephoto lens",
  FISHEYE = "fisheye lens",
}

export enum CameraType {
  DSLR = "DSLR camera",
  MIRRORLESS = "mirrorless camera",
  POINT_AND_SHOOT = "point and shoot camera",
  FILM = "film camera",
  CCTV = "CCTV",
  DRONE = "drone camera",
}
