export default interface IGlobalState {
  asylumProgress?: string;
  visa?: string;
  fingerprints?: string;
  passport?: string;
  nationality?: string;
  under18?: string;
  familyInGermany?: string;
  familyElsewhere?: string;
  adviceLocation?: string;
  // Prefs
  prefCity?: any;
  prefLang?: string;
  selectedAdisor?: string;
  // Viewport
  latitude: number;
  longitude: number;
  height: string | number;
  width: string | number;
  zoom: number;
  // User location
  userLon: number,
  userLat: number
}
