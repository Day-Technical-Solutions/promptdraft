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
  const generateUrl = (title: string) => {
    const formattedTitle = title
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join("_");

    return `${process.env.NEXT_PUBLIC_AWS_CDN_URL}/${formattedTitle}.jpg`;
  };

  switch (enumType) {
    case PhotoArtStyle.PORTRAIT:
      return { title: "Portrait", url: generateUrl("Portrait") };
    case PhotoArtStyle.COLOR_SPLASH:
      return { title: "Color Splash", url: generateUrl("Color Splash") };
    case PhotoArtStyle.DIGITAL_ART:
      return { title: "Digital Art", url: generateUrl("Digital Art") };
    case PhotoArtStyle.LOW_POLY:
      return { title: "Low Poly Model", url: generateUrl("Low Poly Model") };
    case PhotoArtStyle.SCENIC_LANDSCAPE:
      return {
        title: "Scenic Landscape",
        url: generateUrl("Scenic Landscape"),
      };
    case PhotoArtStyle.ABSTRACT:
      return { title: "Abstract", url: generateUrl("Abstract") };
    case PhotoArtStyle.IMPRESSIONISM:
      return { title: "Impressionism", url: generateUrl("Impressionism") };
    case PhotoArtStyle.MINIMALISM:
      return { title: "Minimalism", url: generateUrl("Minimalism") };
    case PhotoArtStyle.RETRO_FUTURISM:
      return { title: "Retro Futurism", url: generateUrl("Retro Futurism") };
    case PhotoArtStyle.CYBERPUNK:
      return { title: "Cyberpunk", url: generateUrl("Cyberpunk") };
    case PhotoArtStyle.STEAMPUNK:
      return { title: "Steampunk", url: generateUrl("Steampunk") };
    case PhotoArtStyle.POST_APOCALYPTIC:
      return {
        title: "Post-Apocalyptic",
        url: generateUrl("Post-Apocalyptic"),
      };
    case PhotoArtStyle.SURREALISM:
      return { title: "Surrealism", url: generateUrl("Surrealism") };
    case PhotoArtStyle.FANTASY:
      return { title: "Fantasy", url: generateUrl("Fantasy") };
    case PhotoArtStyle.POP_ART:
      return { title: "Pop Art", url: generateUrl("Pop Art") };
    case PhotoArtStyle.SPLASH_ART:
      return { title: "Splash Art", url: generateUrl("Splash Art") };
    case PhotoArtStyle.PHSYCHEDELIC:
      return { title: "Psychedelic", url: generateUrl("Psychedelic") };
    case PhotoArtStyle.MOVIE_POSTER:
      return { title: "Movie Poster", url: generateUrl("Movie Poster") };
    case PhotoArtStyle.STREET_PHOTOGRAPHY:
      return {
        title: "Street Photography",
        url: generateUrl("Street Photography"),
      };
    case PhotoArtStyle.ARCHITECTURE:
      return { title: "Architecture", url: generateUrl("Architecture") };
    case PhotoArtStyle.HIGH_RESOLUTION_SCAN:
      return {
        title: "High Resolution Scan",
        url: generateUrl("High Resolution Scan"),
      };
    case PhotoArtStyle.BRUTALISM:
      return { title: "Brutalism", url: generateUrl("Brutalism") };
    case PhotoArtStyle.LIMINAL_SPACING:
      return { title: "Liminal Spacing", url: generateUrl("Liminal Spacing") };
    case PhotoArtStyle.WILDLIFE:
      return { title: "Wildlife", url: generateUrl("Wildlife") };
    case PhotoArtStyle.FASHION:
      return { title: "Fashion", url: generateUrl("Fashion") };
    case PhotoArtStyle.BOTANICAL:
      return { title: "Botanical", url: generateUrl("Botanical") };
    case PhotoArtStyle.FUTURISTIC:
      return { title: "Futuristic", url: generateUrl("Futuristic") };
    case PhotoArtStyle.PIXAR_ANIMATION:
      return { title: "Pixar Animation", url: generateUrl("Pixar Animation") };
    case PhotoArtStyle.VECTOR_ILLUSTRATION:
      return {
        title: "Vector Illustration",
        url: generateUrl("Vector Illustration"),
      };
    case PhotoArtStyle.CHILDRENS_BOOK:
      return { title: "Children's Book", url: generateUrl("Children's Book") };
    case PhotoArtStyle.URBAN:
      return { title: "Urban", url: generateUrl("Urban") };
    case PhotoArtStyle.MANGA:
      return { title: "Manga", url: generateUrl("Manga") };
    case PhotoArtStyle.ANIME:
      return { title: "Anime", url: generateUrl("Anime") };
    case PhotoArtStyle.COMIC:
      return { title: "Comic", url: generateUrl("Comic") };
    case PhotoArtStyle.CARICATURE:
      return { title: "Caricature", url: generateUrl("Caricature") };
    case PhotoArtStyle.PROPAGANDA:
      return { title: "Propaganda", url: generateUrl("Propaganda") };
    case PhotoArtStyle.MINECRAFT:
      return { title: "Minecraft", url: generateUrl("Minecraft") };
    case PhotoArtStyle.BAROQUE:
      return { title: "Baroque", url: generateUrl("Baroque") };
    //----------------------------------------
    case ArtMedium.PAINTING:
      return { title: "Painting", url: generateUrl("Painting") };
    case ArtMedium.SKETCH:
      return { title: "Sketch", url: generateUrl("Sketch") };
    case ArtMedium.OIL_PASTEL:
      return { title: "Oil Pastel", url: generateUrl("Oil Pastel") };
    case ArtMedium.WATER_COLOR:
      return { title: "Water Color", url: generateUrl("Water Color") };
    case ArtMedium.RENDERED_ART:
      return { title: "3D Render/Model", url: generateUrl("3D Render_Model") };
    case ArtMedium.INK_DRAWING:
      return { title: "Ink Drawing", url: generateUrl("Ink Drawing") };
    case ArtMedium.ILLUSTRATION_2D:
      return { title: "2D Illustration", url: generateUrl("2D Illustration") };
    case ArtMedium.CHALK:
      return { title: "Chalk", url: generateUrl("Chalk") };
    case ArtMedium.COLLAGE:
      return { title: "Collage", url: generateUrl("Collage") };
    case ArtMedium.SCULPTURE:
      return { title: "Sculpture", url: generateUrl("Sculpture") };
    case ArtMedium.STICKER:
      return { title: "Sticker", url: generateUrl("Sticker") };
    case ArtMedium.PHOTOGRAPHY:
      return { title: "Photography", url: generateUrl("Photography") };
    case ArtMedium.CHARCOAL_DRAWING:
      return {
        title: "Charcoal Drawing",
        url: generateUrl("Charcoal Drawing"),
      };
    case ArtMedium.ACRYLIC_PAINTING:
      return {
        title: "Acrylic Painting",
        url: generateUrl("Acrylic Painting"),
      };
    case ArtMedium.MIXED_MEDIA:
      return { title: "Mixed Media", url: generateUrl("Mixed Media") };
    case ArtMedium.ENGRAVING:
      return { title: "Engraving", url: generateUrl("Engraving") };
    case ArtMedium.POTTERY:
      return { title: "Pottery", url: generateUrl("Pottery") };
    case ArtMedium.GRAFFITI:
      return { title: "Graffiti", url: generateUrl("Graffiti") };
    case ArtMedium.PRINTMAKING:
      return { title: "Printmaking", url: generateUrl("Printmaking") };
    case ArtMedium.GLASSBLOWING:
      return { title: "Glassblowing", url: generateUrl("Glassblowing") };
    case ArtMedium.FIBER_ART:
      return { title: "Fiber Art", url: generateUrl("Fiber Art") };
    case ArtMedium.CROTCHET:
      return { title: "Crotchet", url: generateUrl("Crotchet") };
    case ArtMedium.METALLURGY:
      return { title: "Metallurgy", url: generateUrl("Metallurgy") };
    case ArtMedium.WOODCARVING:
      return { title: "Wood Carving", url: generateUrl("Wood Carving") };
    case ArtMedium.INSTALLATION_ART:
      return {
        title: "Installation Art",
        url: generateUrl("Installation Art"),
      };
    case ArtMedium.ORIGAMI:
      return { title: "Origami", url: generateUrl("Origami") };
    case ArtMedium.NEEDLE_FELTED:
      return { title: "Needle Felted", url: generateUrl("Needle Felted") };
    //----------------------------------------
    case ColorScheme.VIBRANT_COLORS:
      return { title: "Vibrant", url: generateUrl("Vibrant") };
    case ColorScheme.ACIDWAVE:
      return { title: "Acidwave", url: generateUrl("Acidwave") };
    case ColorScheme.VAPORWAVE:
      return { title: "Vaporwave", url: generateUrl("Vaporwave") };
    case ColorScheme.DREAMCORE:
      return { title: "Dreamcore", url: generateUrl("Dreamcore") };
    case ColorScheme.WEIRDCORE:
      return { title: "Weirdcore", url: generateUrl("Weirdcore") };
    case ColorScheme.WARM_COLORS:
      return { title: "Warm Colors", url: generateUrl("Warm Colors") };
    case ColorScheme.COOL_COLORS:
      return { title: "Cool Colors", url: generateUrl("Cool Colors") };
    case ColorScheme.PASTEL_COLORS:
      return { title: "Pastel", url: generateUrl("Pastel") };
    case ColorScheme.NEON_COLORS:
      return { title: "Neon", url: generateUrl("Neon") };
    case ColorScheme.EARTH_TONES:
      return { title: "Earth Tones", url: generateUrl("Earth Tones") };
    case ColorScheme.MONOCHROMATIC_COLORS:
      return { title: "Monochromatic", url: generateUrl("Monochromatic") };
    case ColorScheme.CONTRASTING_COLORS:
      return { title: "Contrasting", url: generateUrl("Contrasting") };
    case ColorScheme.MUTED_COLORS:
      return { title: "Muted", url: generateUrl("Muted") };
    case ColorScheme.BOLD_COLORS:
      return { title: "Bold", url: generateUrl("Bold") };
    case ColorScheme.GRADIENT_COLORS:
      return { title: "Gradient", url: generateUrl("Gradient") };
    case ColorScheme.METALLIC_COLORS:
      return { title: "Metallic", url: generateUrl("Metallic") };
    case ColorScheme.RETRO_COLORS:
      return { title: "Retro", url: generateUrl("Retro") };
    case ColorScheme.SUNSET_COLORS:
      return { title: "Sunset Colors", url: generateUrl("Sunset Colors") };
    case ColorScheme.PASTEL_GOTH_COLORS:
      return { title: "Pastel Goth", url: generateUrl("Pastel Goth") };
    case ColorScheme.BLACK_AND_WHITE:
      return { title: "Black and White", url: generateUrl("Black_and_White") };
    //-------------------------------------------------
    case Influence.DEREK_GORES:
      return { title: "Derek Gores", url: generateUrl("Derek Gores") };
    case Influence.ALEJANDRO_BURDISIO:
      return {
        title: "Alejandro Burdisio",
        url: generateUrl("Alejandro Burdisio"),
      };
    case Influence.SALVADOR_DALI:
      return { title: "Salvador Dalí", url: generateUrl("Salvador Dalí") };
    case Influence.PABLO_PICASSO:
      return { title: "Pablo Picasso", url: generateUrl("Pablo Picasso") };
    case Influence.LEONARDO_DA_VINCI:
      return {
        title: "Leonardo da Vinci",
        url: generateUrl("Leonardo_da Vinci"),
      };
    case Influence.VINCENT_VAN_GOGH:
      return {
        title: "Vincent van Gogh",
        url: generateUrl("Vincent_van Gogh"),
      };
    case Influence.FRIDA_KAHLO:
      return { title: "Frida Kahlo", url: generateUrl("Frida Kahlo") };
    case Influence.ANDY_WARHOL:
      return { title: "Andy Warhol", url: generateUrl("Andy Warhol") };
    case Influence.REMBRANDT:
      return { title: "Rembrandt", url: generateUrl("Rembrandt") };
    case Influence.CLAUDE_MONET:
      return { title: "Claude Monet", url: generateUrl("Claude Monet") };
    case Influence.EDVARD_MUNCH:
      return { title: "Edvard Munch", url: generateUrl("Edvard Munch") };
    case Influence.GEORGIA_O_KEEFFE:
      return {
        title: "Georgia O'Keeffe",
        url: generateUrl("Georgia O'Keeffe"),
      };
    case Influence.YAYOI_KUSAMA:
      return { title: "Yayoi Kusama", url: generateUrl("Yayoi Kusama") };
    case Influence.JACKSON_POLLOCK:
      return { title: "Jackson Pollock", url: generateUrl("Jackson Pollock") };
    case Influence.BANKSY:
      return { title: "Banksy", url: generateUrl("Banksy") };
    case Influence.GUSTAV_KLIMT:
      return { title: "Gustav Klimt", url: generateUrl("Gustav Klimt") };
    case Influence.HENRI_MATISSE:
      return { title: "Henri Matisse", url: generateUrl("Henri Matisse") };
    case Influence.WASSILY_KANDINSKY:
      return {
        title: "Wassily Kandinsky",
        url: generateUrl("Wassily Kandinsky"),
      };
    case Influence.JEAN_MICHEL_BASQUIAT:
      return {
        title: "Jean-Michel Basquiat",
        url: generateUrl("Jean-Michel Basquiat"),
      };
    case Influence.FRANCIS_BACON:
      return { title: "Francis Bacon", url: generateUrl("Francis Bacon") };
    //---------------------------------------------
    case Lighting.NOSTALGIC_LIGHTING:
      return { title: "Nostalgic", url: generateUrl("Nostalgic") };
    case Lighting.PURPLE_NEON_LIGHTING:
      return { title: "Purple Neon", url: generateUrl("Purple Neon2") };
    case Lighting.WARM_LIGHTING:
      return { title: "Warm Lighting", url: generateUrl("Warm Lighting") };
    case Lighting.SOFT_LIGHTING:
      return { title: "Soft", url: generateUrl("Soft") };
    case Lighting.COOL_LIGHTING:
      return { title: "Cool Lighting", url: generateUrl("Cool Lighting") };
    case Lighting.DAYLIGHT:
      return { title: "Daylight", url: generateUrl("Daylight") };
    case Lighting.MOODY:
      return { title: "Moody", url: generateUrl("Moody") };
    case Lighting.BACKLIGHTING:
      return { title: "Backlighting", url: generateUrl("Backlighting") };
    case Lighting.LOW_KEY:
      return { title: "Low Key", url: generateUrl("Low Key") };
    case Lighting.HIGH_KEY:
      return { title: "High Key", url: generateUrl("High Key") };
    case Lighting.RIM_LIGHTING:
      return { title: "Rim", url: generateUrl("Rim") };
    case Lighting.NATURAL_LIGHTING:
      return { title: "Natural", url: generateUrl("Natural") };
    case Lighting.CANDLELIGHT:
      return { title: "Candle", url: generateUrl("Candlelight") };
    case Lighting.STUDIO_LIGHTING:
      return { title: "Studio", url: generateUrl("Studio") };
    case Lighting.SILHOUETTE:
      return { title: "Silhouette", url: generateUrl("Silhouette") };
    case Lighting.UNDERWATER:
      return { title: "Underwater", url: generateUrl("Underwater") };
    case Lighting.HARSH_LIGHTING:
      return { title: "Harsh", url: generateUrl("Harsh") };
    case Lighting.FOGGY:
      return { title: "Foggy", url: generateUrl("Foggy") };
    case Lighting.GLOOMY:
      return { title: "Gloomy Lighting", url: generateUrl("Gloomy") };
    //---------------------------------------
    case Mood.COZY:
      return { title: "Cozy", url: generateUrl("Cozy") };
    case Mood.ROMANTIC:
      return { title: "Romantic", url: generateUrl("Romantic") };
    case Mood.LUSTFUL:
      return { title: "Lustful", url: generateUrl("Lustful") };
    case Mood.GLOOMY:
      return { title: "Gloomy Mood", url: generateUrl("Gloomy Mood") };
    case Mood.SERENE:
      return { title: "Serene", url: generateUrl("Serene") };
    case Mood.MYSTERIOUS:
      return { title: "Mysterious", url: generateUrl("Mysterious") };
    case Mood.EUPHORIC:
      return { title: "Euphoric", url: generateUrl("Euphoric") };
    case Mood.WHIMSICAL:
      return { title: "Whimsical", url: generateUrl("Whimsical") };
    case Mood.LONELY:
      return { title: "Lonely", url: generateUrl("Lonely") };
    case Mood.HOPELESS:
      return { title: "Hopeless", url: generateUrl("Hopeless") };
    case Mood.CALM:
      return { title: "Calm", url: generateUrl("Calm") };
    case Mood.FEARFUL:
      return { title: "Fearful", url: generateUrl("Fearful") };
    case Mood.EXCITING:
      return { title: "Exciting", url: generateUrl("Exciting") };
    case Mood.DREAMY:
      return { title: "Dreamy", url: generateUrl("Dreamy") };
    case Mood.PASSIONATE:
      return { title: "Passionate", url: generateUrl("Passionate") };
    case Mood.PLAYFUL:
      return { title: "Playful", url: generateUrl("Playful") };
    case Mood.SATISFACTION:
      return { title: "Satisfaction", url: generateUrl("Satisfaction") };
    case Mood.ETHEREAL:
      return { title: "Ethereal", url: generateUrl("Ethereal") };
    case Mood.ENCHANTING:
      return { title: "Enchanting", url: generateUrl("Enchanting") };
    case Mood.TRANQUIL:
      return { title: "Tranquil", url: generateUrl("Tranquil") };
    case Mood.DRAMATIC:
      return { title: "Dramatic", url: generateUrl("Dramatic") };
    case Mood.INSPIRING:
      return { title: "Inspiring", url: generateUrl("Inspiring") };
    //---------------------------------
    case Realism.REALISTIC:
      return { title: "Realistic", url: generateUrl("Realistic") };
    case Realism.HYPERREALISTIC:
      return { title: "Hyper Realistic", url: generateUrl("Hyper Realistic") };
    case Realism.UNREALISTIC:
      return { title: "Unrealistic", url: generateUrl("Unrealistic") };
    //------------------------------
    case TimeOfDay.DUSK:
      return { title: "Dusk", url: generateUrl("Dusk") };
    case TimeOfDay.MORNING:
      return { title: "Morning", url: generateUrl("Morning") };
    case TimeOfDay.DAWN:
      return { title: "Dawn", url: generateUrl("Dawn") };
    case TimeOfDay.MIDNIGHT:
      return { title: "Midnight", url: generateUrl("Midnight") };
    case TimeOfDay.AFTERNOON:
      return { title: "Afternoon", url: generateUrl("Afternoon") };
    case TimeOfDay.SUNSET:
      return { title: "Sunset", url: generateUrl("Sunset") };
    case TimeOfDay.TWILIGHT:
      return { title: "Twilight", url: generateUrl("Twilight") };
    case TimeOfDay.GOLDEN_HOUR:
      return { title: "Golden Hour", url: generateUrl("Golden Hour") };
    case TimeOfDay.NIGHT:
      return { title: "Night", url: generateUrl("Night") };
    case TimeOfDay.SUNRISE:
      return { title: "Sunrise", url: generateUrl("Sunrise") };
    case TimeOfDay.NOON:
      return { title: "Noon", url: generateUrl("Noon") };
    case TimeOfDay.EVENING:
      return { title: "Evening", url: generateUrl("Evening") };
    case TimeOfDay.LATE_NIGHT:
      return { title: "Late Night", url: generateUrl("Late Night") };
    case TimeOfDay.EARLY_MORNING:
      return { title: "Early Morning", url: generateUrl("Early Morning") };
    case TimeOfDay.LATE_AFTERNOON:
      return { title: "Late Afternoon", url: generateUrl("Late Afternoon") };
    case TimeOfDay.MIDDAY:
      return { title: "Midday", url: generateUrl("Midday") };
    case TimeOfDay.EARLY_EVENING:
      return { title: "Early Evening", url: generateUrl("Early Evening") };
    case TimeOfDay.LATE_EVENING:
      return { title: "Late Evening", url: generateUrl("Late Evening") };
    case TimeOfDay.PRE_DAWN:
      return { title: "Pre-Dawn", url: generateUrl("Pre-Dawn") };
    case TimeOfDay.POST_SUNSET:
      return { title: "Post-Sunset", url: generateUrl("Post-Sunset") };
    //------------------------------------------------
    case CameraView.NORMAL:
      return { title: "Normal View", url: generateUrl("Normal View") };
    case CameraView.ZOOM:
      return { title: "Zoom View", url: generateUrl("Zoom View") };
    case CameraView.PANORAMIC:
      return { title: "Panoramic View", url: generateUrl("Panoramic View") };
    case CameraView.BOKEH:
      return { title: "Bokeh", url: generateUrl("Bokeh") };
    //-------------------------------------------------
    case CameraLens.STANDARD:
      return { title: "Standard Lens", url: generateUrl("Standard Lens") };
    case CameraLens.PRIME:
      return { title: "Prime Lens", url: generateUrl("Prime Lens") };
    case CameraLens.MACRO:
      return { title: "Macro Lens", url: generateUrl("Macro Lens") };
    case CameraLens.WIDE_ANGLE:
      return { title: "Wide Angle Lens", url: generateUrl("Wide Angle Lens") };
    case CameraLens.TELEPHOTO:
      return { title: "Telephoto Lens", url: generateUrl("Telephoto Lens") };
    case CameraLens.FISHEYE:
      return { title: "Fisheye Lens", url: generateUrl("Fisheye Lens") };
    //---------------------------------------------------
    case CameraType.DSLR:
      return { title: "DSLR Camera", url: generateUrl("DSLR") };
    case CameraType.MIRRORLESS:
      return {
        title: "Mirrorless Camera",
        url: generateUrl("Mirrorless"),
      };
    case CameraType.POINT_AND_SHOOT:
      return {
        title: "Point and Shoot Camera",
        url: generateUrl("Point_and_Shoot"),
      };
    case CameraType.FILM:
      return { title: "Film Camera", url: generateUrl("Film") };
    case CameraType.CCTV:
      return { title: "CCTV", url: generateUrl("CCTV") };
    case CameraType.DRONE:
      return { title: "Drone Camera", url: generateUrl("Drone") };
    //----------------------------------------------------
    case MagicWords.BEST_QUALITY:
      return { title: "Best Quality", url: generateUrl("Best Quality") };
    case MagicWords.MASTERPIECE:
      return { title: "Masterpiece", url: generateUrl("Masterpiece") };
    case MagicWords.HIGHLY_DETAILED:
      return { title: "Highly Detailed", url: generateUrl("Highly Detailed") };
    case MagicWords.HDR:
      return { title: "HDR", url: generateUrl("HDR") };
    case MagicWords.STUNNING:
      return { title: "Stunning", url: generateUrl("Stunning") };
    case MagicWords.HIGH_RESOLUTION:
      return { title: "High Resolution", url: generateUrl("High Resolution") };
    case MagicWords.BREATHTAKING:
      return { title: "Breathtaking", url: generateUrl("Breathtaking") };
    case MagicWords.IMPRESSIVE:
      return { title: "Impressive", url: generateUrl("Impressive") };
    case MagicWords.ARTISTIC:
      return { title: "Artistic", url: generateUrl("Artistic") };
    case MagicWords.PROFESSIONAL:
      return { title: "Professional", url: generateUrl("Professional") };
    case MagicWords.FANTASTIC:
      return { title: "Fantastic", url: generateUrl("Fantastic") };
    case MagicWords.CAPTIVATING:
      return { title: "Captivating", url: generateUrl("Captivating") };
    case MagicWords.EYE_CATCHING:
      return { title: "Eye Catching", url: generateUrl("Eye Catching") };
    case MagicWords.INTRIGUING:
      return { title: "Intriguing", url: generateUrl("Intriguing") };
    case MagicWords.EXQUISITE:
      return { title: "Exquisite", url: generateUrl("Exquisite") };
    case MagicWords.TRENDING_ON_ARTSTATION:
      return {
        title: "Trending On Artstation",
        url: generateUrl("Trending On Artstation"),
      };
    default:
      return { title: "", url: "" };
  }
}
