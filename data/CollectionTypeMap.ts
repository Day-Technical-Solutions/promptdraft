/** @format */

import { CameraLens, CameraType, CameraView } from "./Camera";
import ArtMedium from "./ArtMedium";
import ColorScheme from "./ColorScheme";
import Influence from "./Influence";
import Lighting from "./Lighting";
import MagicWords from "./MagicWords";
import Mood from "./Mood";
import PhotoArtStyle from "./PhotoArtStyle";
import Realism from "./Realism";
import TimeOfDay from "./TimeOfDay";

export type CollectionEnumType =
  | PhotoArtStyle
  | ArtMedium
  | ColorScheme
  | Influence
  | Lighting
  | Mood
  | Realism
  | TimeOfDay
  | CameraLens
  | CameraType
  | CameraView
  | MagicWords;

export function CollectionTypeMap(enumType: CollectionEnumType): {
  title: string;
  url: string;
} {
  switch (enumType) {
    case PhotoArtStyle.PORTRAIT:
      return { title: "Portrait", url: "/assets/images/placeholder.png" };
    case PhotoArtStyle.COLOR_SPLASH:
      return { title: "Color Splash", url: "/assets/images/placeholder.png" };
    case PhotoArtStyle.DIGITAL_ART:
      return { title: "Digital Art", url: "/assets/images/placeholder.png" };
    case PhotoArtStyle.LOW_POLY:
      return { title: "Low Poly Model", url: "/assets/images/placeholder.png" };
    case PhotoArtStyle.SCENIC_LANDSCAPE:
      return {
        title: "Scenic Landscape",
        url: "/assets/images/placeholder.png",
      };
    case PhotoArtStyle.ABSTRACT:
      return { title: "Abstract", url: "/assets/images/placeholder.png" };
    case PhotoArtStyle.IMPRESSIONISM:
      return { title: "Impressionism", url: "/assets/images/placeholder.png" };
    case PhotoArtStyle.MINIMALISM:
      return { title: "Minimalism", url: "/assets/images/placeholder.png" };
    case PhotoArtStyle.RETRO_FUTURISM:
      return { title: "Retro Futurism", url: "/assets/images/placeholder.png" };
    case PhotoArtStyle.CYBERPUNK:
      return { title: "Cyberpunk", url: "/assets/images/placeholder.png" };
    case PhotoArtStyle.STEAMPUNK:
      return { title: "Steampunk", url: "/assets/images/placeholder.png" };
    case PhotoArtStyle.POST_APOCALYPTIC:
      return {
        title: "Post-Apocalyptic",
        url: "/assets/images/placeholder.png",
      };
    case PhotoArtStyle.SURREALISM:
      return { title: "Surrealism", url: "/assets/images/placeholder.png" };
    case PhotoArtStyle.FANTASY:
      return { title: "Fantasy", url: "/assets/images/placeholder.png" };
    case PhotoArtStyle.POP_ART:
      return { title: "Pop Art", url: "/assets/images/placeholder.png" };
    case PhotoArtStyle.SPLASH_ART:
      return { title: "Splash Art", url: "/assets/images/placeholder.png" };
    case PhotoArtStyle.PHSYCHEDELIC:
      return { title: "Psychedelic", url: "/assets/images/placeholder.png" };
    case PhotoArtStyle.MOVIE_POSTER:
      return { title: "Movie Poster", url: "/assets/images/placeholder.png" };
    case PhotoArtStyle.STREET_PHOTOGRAPHY:
      return {
        title: "Street Photography",
        url: "/assets/images/placeholder.png",
      };
    case PhotoArtStyle.ARCHITECTURE:
      return { title: "Architecture", url: "/assets/images/placeholder.png" };
    case PhotoArtStyle.HIGH_RESOLUTION_SCAN:
      return {
        title: "High Resolution Scan",
        url: "/assets/images/placeholder.png",
      };
    case PhotoArtStyle.BRUTALISM:
      return { title: "Brutalism", url: "/assets/images/placeholder.png" };
    case PhotoArtStyle.LIMINAL_SPACING:
      return {
        title: "Liminal Spacing",
        url: "/assets/images/placeholder.png",
      };
    case PhotoArtStyle.WILDLIFE:
      return { title: "Wildlife", url: "/assets/images/placeholder.png" };
    case PhotoArtStyle.FASHION:
      return { title: "Fashion", url: "/assets/images/placeholder.png" };
    case PhotoArtStyle.BOTANICAL:
      return { title: "Botanical", url: "/assets/images/placeholder.png" };
    case PhotoArtStyle.FUTURISTIC:
      return { title: "Futuristic", url: "/assets/images/placeholder.png" };
    case PhotoArtStyle.PIXAR_ANIMATION:
      return {
        title: "Pixar Animation",
        url: "/assets/images/placeholder.png",
      };
    case PhotoArtStyle.VECTOR_ILLUSTRATION:
      return {
        title: "Vector Illustration",
        url: "/assets/images/placeholder.png",
      };
    case PhotoArtStyle.CHILDRENS_BOOK:
      return {
        title: "Children's Book",
        url: "/assets/images/placeholder.png",
      };
    case PhotoArtStyle.URBAN:
      return { title: "Urban", url: "/assets/images/placeholder.png" };
    case PhotoArtStyle.MANGA:
      return { title: "Manga", url: "/assets/images/placeholder.png" };
    case PhotoArtStyle.ANIME:
      return { title: "Anime", url: "/assets/images/placeholder.png" };
    case PhotoArtStyle.COMIC:
      return { title: "Comic", url: "/assets/images/placeholder.png" };
    case PhotoArtStyle.CARICATURE:
      return { title: "Caricature", url: "/assets/images/placeholder.png" };
    case PhotoArtStyle.PROPAGANDA:
      return { title: "Propaganda", url: "/assets/images/placeholder.png" };
    case PhotoArtStyle.MINECRAFT:
      return { title: "Minecraft", url: "/assets/images/placeholder.png" };
    case PhotoArtStyle.BAROQUE:
      return { title: "Baroque", url: "/assets/images/placeholder.png" };
    //----------------------------------------
    case ArtMedium.PAINTING:
      return { title: "Painting", url: "/assets/images/placeholder.png" };
    case ArtMedium.SKETCH:
      return { title: "Sketch", url: "/assets/images/placeholder.png" };
    case ArtMedium.OIL_PASTEL:
      return { title: "Oil Pastel", url: "/assets/images/placeholder.png" };
    case ArtMedium.WATER_COLOR:
      return { title: "Water Color", url: "/assets/images/placeholder.png" };
    case ArtMedium.RENDERED_ART:
      return {
        title: "3D Render/Model",
        url: "/assets/images/placeholder.png",
      };
    case ArtMedium.INK_DRAWING:
      return { title: "Ink Drawing", url: "/assets/images/placeholder.png" };
    case ArtMedium.ILLUSTRATION_2D:
      return {
        title: "2D Illustration",
        url: "/assets/images/placeholder.png",
      };
    case ArtMedium.CHALK:
      return { title: "Chalk", url: "/assets/images/placeholder.png" };
    case ArtMedium.COLLAGE:
      return { title: "Collage", url: "/assets/images/placeholder.png" };
    case ArtMedium.SCULPTURE:
      return { title: "Sculpture", url: "/assets/images/placeholder.png" };
    case ArtMedium.STICKER:
      return { title: "Sticker", url: "/assets/images/placeholder.png" };
    case ArtMedium.PHOTOGRAPHY:
      return { title: "Photography", url: "/assets/images/placeholder.png" };
    case ArtMedium.CHARCOAL_DRAWING:
      return {
        title: "Charcoal Drawing",
        url: "/assets/images/placeholder.png",
      };
    case ArtMedium.ACRYLIC_PAINTING:
      return {
        title: "Acrylic Painting",
        url: "/assets/images/placeholder.png",
      };
    case ArtMedium.MIXED_MEDIA:
      return { title: "Mixed Media", url: "/assets/images/placeholder.png" };
    case ArtMedium.ENGRAVING:
      return { title: "Engraving", url: "/assets/images/placeholder.png" };
    case ArtMedium.POTTERY:
      return { title: "Pottery", url: "/assets/images/placeholder.png" };
    case ArtMedium.GRAFFITI:
      return { title: "Graffiti", url: "/assets/images/placeholder.png" };
    case ArtMedium.PRINTMAKING:
      return { title: "Printmaking", url: "/assets/images/placeholder.png" };
    case ArtMedium.GLASSBLOWING:
      return { title: "Glassblowing", url: "/assets/images/placeholder.png" };
    case ArtMedium.FIBER_ART:
      return { title: "Fiber Art", url: "/assets/images/placeholder.png" };
    case ArtMedium.CROTCHET:
      return { title: "Crotchet", url: "/assets/images/placeholder.png" };
    case ArtMedium.METALLURGY:
      return { title: "Metallurgy", url: "/assets/images/placeholder.png" };
    case ArtMedium.WOODCARVING:
      return { title: "Wood Carving", url: "/assets/images/placeholder.png" };
    case ArtMedium.INSTALLATION_ART:
      return {
        title: "Installation Art",
        url: "/assets/images/placeholder.png",
      };
    case ArtMedium.ORIGAMI:
      return { title: "Origami", url: "/assets/images/placeholder.png" };
    case ArtMedium.NEEDLE_FELTED:
      return { title: "Needle Felted", url: "/assets/images/placeholder.png" };
    //----------------------------------------
    case ColorScheme.VIBRANT_COLORS:
      return { title: "Vibrant", url: "/assets/images/placeholder.png" };
    case ColorScheme.ACIDWAVE:
      return { title: "Acidwave", url: "/assets/images/placeholder.png" };
    case ColorScheme.VAPORWAVE:
      return { title: "Vaporwave", url: "/assets/images/placeholder.png" };
    case ColorScheme.DREAMCORE:
      return { title: "Dreamcore", url: "/assets/images/placeholder.png" };
    case ColorScheme.WEIRDCORE:
      return { title: "Weirdcore", url: "/assets/images/placeholder.png" };
    case ColorScheme.WARM_COLORS:
      return { title: "Warm Colors", url: "/assets/images/placeholder.png" };
    case ColorScheme.COOL_COLORS:
      return { title: "Cool Colors", url: "/assets/images/placeholder.png" };
    case ColorScheme.PASTEL_COLORS:
      return { title: "Pastel", url: "/assets/images/placeholder.png" };
    case ColorScheme.NEON_COLORS:
      return { title: "Neon", url: "/assets/images/placeholder.png" };
    case ColorScheme.EARTH_TONES:
      return { title: "Earth Tones", url: "/assets/images/placeholder.png" };
    case ColorScheme.MONOCHROMATIC_COLORS:
      return { title: "Monochromatic", url: "/assets/images/placeholder.png" };
    case ColorScheme.CONTRASTING_COLORS:
      return { title: "Contrasting", url: "/assets/images/placeholder.png" };
    case ColorScheme.MUTED_COLORS:
      return { title: "Muted", url: "/assets/images/placeholder.png" };
    case ColorScheme.BOLD_COLORS:
      return { title: "Bold", url: "/assets/images/placeholder.png" };
    case ColorScheme.GRADIENT_COLORS:
      return { title: "Gradient", url: "/assets/images/placeholder.png" };
    case ColorScheme.METALLIC_COLORS:
      return { title: "Metallic", url: "/assets/images/placeholder.png" };
    case ColorScheme.RETRO_COLORS:
      return { title: "Retro", url: "/assets/images/placeholder.png" };
    case ColorScheme.SUNSET_COLORS:
      return { title: "Sunset Colors", url: "/assets/images/placeholder.png" };
    case ColorScheme.PASTEL_GOTH_COLORS:
      return { title: "Pastel Goth", url: "/assets/images/placeholder.png" };
    case ColorScheme.BLACK_AND_WHITE:
      return {
        title: "Black and White",
        url: "/assets/images/placeholder.png",
      };
    //-------------------------------------------------
    case Influence.DEREK_GORES:
      return { title: "Derek Gores", url: "/assets/images/placeholder.png" };
    case Influence.ALEJANDRO_BURDISIO:
      return {
        title: "Alejandro Burdisio",
        url: "/assets/images/placeholder.png",
      };
    case Influence.SALVADOR_DALI:
      return { title: "Salvador Dalí", url: "/assets/images/placeholder.png" };
    case Influence.PABLO_PICASSO:
      return { title: "Pablo Picasso", url: "/assets/images/placeholder.png" };
    case Influence.LEONARDO_DA_VINCI:
      return {
        title: "Leonardo da Vinci",
        url: "/assets/images/placeholder.png",
      };
    case Influence.VINCENT_VAN_GOGH:
      return {
        title: "Vincent van Gogh",
        url: "/assets/images/placeholder.png",
      };
    case Influence.FRIDA_KAHLO:
      return { title: "Frida Kahlo", url: "/assets/images/placeholder.png" };
    case Influence.ANDY_WARHOL:
      return { title: "Andy Warhol", url: "/assets/images/placeholder.png" };
    case Influence.REMBRANDT:
      return { title: "Rembrandt", url: "/assets/images/placeholder.png" };
    case Influence.CLAUDE_MONET:
      return { title: "Claude Monet", url: "/assets/images/placeholder.png" };
    case Influence.EDVARD_MUNCH:
      return { title: "Edvard Munch", url: "/assets/images/placeholder.png" };
    case Influence.GEORGIA_O_KEEFFE:
      return {
        title: "Georgia O'Keeffe",
        url: "/assets/images/placeholder.png",
      };
    case Influence.YAYOI_KUSAMA:
      return { title: "Yayoi Kusama", url: "/assets/images/placeholder.png" };
    case Influence.JACKSON_POLLOCK:
      return {
        title: "Jackson Pollock",
        url: "/assets/images/placeholder.png",
      };
    case Influence.BANKSY:
      return { title: "Banksy", url: "/assets/images/placeholder.png" };
    case Influence.GUSTAV_KLIMT:
      return { title: "Gustav Klimt", url: "/assets/images/placeholder.png" };
    case Influence.HENRI_MATISSE:
      return { title: "Henri Matisse", url: "/assets/images/placeholder.png" };
    case Influence.WASSILY_KANDINSKY:
      return {
        title: "Wassily Kandinsky",
        url: "/assets/images/placeholder.png",
      };
    case Influence.JEAN_MICHEL_BASQUIAT:
      return {
        title: "Jean-Michel Basquiat",
        url: "/assets/images/placeholder.png",
      };
    case Influence.FRANCIS_BACON:
      return { title: "Francis Bacon", url: "/assets/images/placeholder.png" };
    //---------------------------------------------
    case Lighting.NOSTALGIC_LIGHTING:
      return { title: "Nostalgic", url: "/assets/images/placeholder.png" };
    case Lighting.PURPLE_NEON_LIGHTING:
      return { title: "Purple Neon", url: "/assets/images/placeholder.png" };
    case Lighting.WARM_LIGHTING:
      return { title: "Warm Lighting", url: "/assets/images/placeholder.png" };
    case Lighting.SOFT_LIGHTING:
      return { title: "Soft", url: "/assets/images/placeholder.png" };
    case Lighting.COOL_LIGHTING:
      return { title: "Cool Lighting", url: "/assets/images/placeholder.png" };
    case Lighting.DAYLIGHT:
      return { title: "Daylight", url: "/assets/images/placeholder.png" };
    case Lighting.MOODY:
      return { title: "Moody", url: "/assets/images/placeholder.png" };
    case Lighting.BACKLIGHTING:
      return { title: "Backlighting", url: "/assets/images/placeholder.png" };
    case Lighting.LOW_KEY:
      return { title: "Low Key", url: "/assets/images/placeholder.png" };
    case Lighting.HIGH_KEY:
      return { title: "High Key", url: "/assets/images/placeholder.png" };
    case Lighting.RIM_LIGHTING:
      return { title: "Rim", url: "/assets/images/placeholder.png" };
    case Lighting.NATURAL_LIGHTING:
      return { title: "Natural", url: "/assets/images/placeholder.png" };
    case Lighting.CANDLELIGHT:
      return { title: "Candle", url: "/assets/images/placeholder.png" };
    case Lighting.STUDIO_LIGHTING:
      return { title: "Studio", url: "/assets/images/placeholder.png" };
    case Lighting.SILHOUETTE:
      return { title: "Silhouette", url: "/assets/images/placeholder.png" };
    case Lighting.UNDERWATER:
      return { title: "Underwater", url: "/assets/images/placeholder.png" };
    case Lighting.HARSH_LIGHTING:
      return { title: "Harsh", url: "/assets/images/placeholder.png" };
    case Lighting.FOGGY:
      return { title: "Foggy", url: "/assets/images/placeholder.png" };
    case Lighting.GLOOMY:
      return {
        title: "Gloomy Lighting",
        url: "/assets/images/placeholder.png",
      };
    //---------------------------------------
    case Mood.COZY:
      return { title: "Cozy", url: "/assets/images/placeholder.png" };
    case Mood.ROMANTIC:
      return { title: "Romantic", url: "/assets/images/placeholder.png" };
    case Mood.LUSTFUL:
      return { title: "Lustful", url: "/assets/images/placeholder.png" };
    case Mood.GLOOMY:
      return { title: "Gloomy Mood", url: "/assets/images/placeholder.png" };
    case Mood.SERENE:
      return { title: "Serene", url: "/assets/images/placeholder.png" };
    case Mood.MYSTERIOUS:
      return { title: "Mysterious", url: "/assets/images/placeholder.png" };
    case Mood.EUPHORIC:
      return { title: "Euphoric", url: "/assets/images/placeholder.png" };
    case Mood.WHIMSICAL:
      return { title: "Whimsical", url: "/assets/images/placeholder.png" };
    case Mood.LONELY:
      return { title: "Lonely", url: "/assets/images/placeholder.png" };
    case Mood.HOPELESS:
      return { title: "Hopeless", url: "/assets/images/placeholder.png" };
    case Mood.CALM:
      return { title: "Calm", url: "/assets/images/placeholder.png" };
    case Mood.FEARFUL:
      return { title: "Fearful", url: "/assets/images/placeholder.png" };
    case Mood.EXCITING:
      return { title: "Exciting", url: "/assets/images/placeholder.png" };
    case Mood.DREAMY:
      return { title: "Dreamy", url: "/assets/images/placeholder.png" };
    case Mood.PASSIONATE:
      return { title: "Passionate", url: "/assets/images/placeholder.png" };
    case Mood.PLAYFUL:
      return { title: "Playful", url: "/assets/images/placeholder.png" };
    case Mood.SATISFACTION:
      return { title: "Satisfaction", url: "/assets/images/placeholder.png" };
    case Mood.ETHEREAL:
      return { title: "Ethereal", url: "/assets/images/placeholder.png" };
    case Mood.ENCHANTING:
      return { title: "Enchanting", url: "/assets/images/placeholder.png" };
    case Mood.TRANQUIL:
      return { title: "Tranquil", url: "/assets/images/placeholder.png" };
    case Mood.DRAMATIC:
      return { title: "Dramatic", url: "/assets/images/placeholder.png" };
    case Mood.INSPIRING:
      return { title: "Inspiring", url: "/assets/images/placeholder.png" };
    //---------------------------------
    case Realism.REALISTIC:
      return { title: "Realistic", url: "/assets/images/placeholder.png" };
    case Realism.HYPERREALISTIC:
      return {
        title: "Hyper Realistic",
        url: "/assets/images/placeholder.png",
      };
    case Realism.UNREALISTIC:
      return { title: "Unrealistic", url: "/assets/images/placeholder.png" };
    //------------------------------
    case TimeOfDay.DUSK:
      return { title: "Dusk", url: "/assets/images/placeholder.png" };
    case TimeOfDay.MORNING:
      return { title: "Morning", url: "/assets/images/placeholder.png" };
    case TimeOfDay.DAWN:
      return { title: "Dawn", url: "/assets/images/placeholder.png" };
    case TimeOfDay.MIDNIGHT:
      return { title: "Midnight", url: "/assets/images/placeholder.png" };
    case TimeOfDay.AFTERNOON:
      return { title: "Afternoon", url: "/assets/images/placeholder.png" };
    case TimeOfDay.SUNSET:
      return { title: "Sunset", url: "/assets/images/placeholder.png" };
    case TimeOfDay.TWILIGHT:
      return { title: "Twilight", url: "/assets/images/placeholder.png" };
    case TimeOfDay.GOLDEN_HOUR:
      return { title: "Golden Hour", url: "/assets/images/placeholder.png" };
    case TimeOfDay.NIGHT:
      return { title: "Night", url: "/assets/images/placeholder.png" };
    case TimeOfDay.SUNRISE:
      return { title: "Sunrise", url: "/assets/images/placeholder.png" };
    case TimeOfDay.NOON:
      return { title: "Noon", url: "/assets/images/placeholder.png" };
    case TimeOfDay.EVENING:
      return { title: "Evening", url: "/assets/images/placeholder.png" };
    case TimeOfDay.LATE_NIGHT:
      return { title: "Late Night", url: "/assets/images/placeholder.png" };
    case TimeOfDay.EARLY_MORNING:
      return { title: "Early Morning", url: "/assets/images/placeholder.png" };
    case TimeOfDay.LATE_AFTERNOON:
      return { title: "Late Afternoon", url: "/assets/images/placeholder.png" };
    case TimeOfDay.MIDDAY:
      return { title: "Midday", url: "/assets/images/placeholder.png" };
    case TimeOfDay.EARLY_EVENING:
      return { title: "Early Evening", url: "/assets/images/placeholder.png" };
    case TimeOfDay.LATE_EVENING:
      return { title: "Late Evening", url: "/assets/images/placeholder.png" };
    case TimeOfDay.PRE_DAWN:
      return { title: "Pre-Dawn", url: "/assets/images/placeholder.png" };
    case TimeOfDay.POST_SUNSET:
      return { title: "Post-Sunset", url: "/assets/images/placeholder.png" };
    //------------------------------------------------
    case CameraView.NORMAL:
      return { title: "Normal View", url: "/assets/images/placeholder.png" };
    case CameraView.ZOOM:
      return { title: "Zoom View", url: "/assets/images/placeholder.png" };
    case CameraView.PANORAMIC:
      return { title: "Panoramic View", url: "/assets/images/placeholder.png" };
    case CameraView.BOKEH:
      return { title: "Bokeh", url: "/assets/images/placeholder.png" };
    //-------------------------------------------------
    case CameraLens.STANDARD:
      return { title: "Standard Lens", url: "/assets/images/placeholder.png" };
    case CameraLens.PRIME:
      return { title: "Prime Lens", url: "/assets/images/placeholder.png" };
    case CameraLens.MACRO:
      return { title: "Macro Lens", url: "/assets/images/placeholder.png" };
    case CameraLens.WIDE_ANGLE:
      return {
        title: "Wide Angle Lens",
        url: "/assets/images/placeholder.png",
      };
    case CameraLens.TELEPHOTO:
      return { title: "Telephoto Lens", url: "/assets/images/placeholder.png" };
    case CameraLens.FISHEYE:
      return { title: "Fisheye Lens", url: "/assets/images/placeholder.png" };
    //---------------------------------------------------
    case CameraType.DSLR:
      return { title: "DSLR Camera", url: "/assets/images/placeholder.png" };
    case CameraType.MIRRORLESS:
      return {
        title: "Mirrorless Camera",
        url: "/assets/images/placeholder.png",
      };
    case CameraType.POINT_AND_SHOOT:
      return {
        title: "Point and Shoot Camera",
        url: "/assets/images/placeholder.png",
      };
    case CameraType.FILM:
      return { title: "Film Camera", url: "/assets/images/placeholder.png" };
    case CameraType.CCTV:
      return { title: "CCTV", url: "/assets/images/placeholder.png" };
    case CameraType.DRONE:
      return { title: "Drone Camera", url: "/assets/images/placeholder.png" };
    //----------------------------------------------------
    case MagicWords.BEST_QUALITY:
      return { title: "Best Quality", url: "/assets/images/placeholder.png" };
    case MagicWords.MASTERPIECE:
      return { title: "Masterpiece", url: "/assets/images/placeholder.png" };
    case MagicWords.HIGHLY_DETAILED:
      return {
        title: "Highly Detailed",
        url: "/assets/images/placeholder.png",
      };
    case MagicWords.HDR:
      return { title: "HDR", url: "/assets/images/placeholder.png" };
    case MagicWords.STUNNING:
      return { title: "Stunning", url: "/assets/images/placeholder.png" };
    case MagicWords.HIGH_RESOLUTION:
      return {
        title: "High Resolution",
        url: "/assets/images/placeholder.png",
      };
    case MagicWords.BREATHTAKING:
      return { title: "Breathtaking", url: "/assets/images/placeholder.png" };
    case MagicWords.IMPRESSIVE:
      return { title: "Impressive", url: "/assets/images/placeholder.png" };
    case MagicWords.ARTISTIC:
      return { title: "Artistic", url: "/assets/images/placeholder.png" };
    case MagicWords.PROFESSIONAL:
      return { title: "Professional", url: "/assets/images/placeholder.png" };
    case MagicWords.FANTASTIC:
      return { title: "Fantastic", url: "/assets/images/placeholder.png" };
    case MagicWords.CAPTIVATING:
      return { title: "Captivating", url: "/assets/images/placeholder.png" };
    case MagicWords.EYE_CATCHING:
      return { title: "Eye Catching", url: "/assets/images/placeholder.png" };
    case MagicWords.INTRIGUING:
      return { title: "Intriguing", url: "/assets/images/placeholder.png" };
    case MagicWords.EXQUISITE:
      return { title: "Exquisite", url: "/assets/images/placeholder.png" };
    case MagicWords.TRENDING_ON_ARTSTATION:
      return {
        title: "Trending On Artstation",
        url: "/assets/images/placeholder.png",
      };
    default:
      return { title: "", url: "" };
  }
}
