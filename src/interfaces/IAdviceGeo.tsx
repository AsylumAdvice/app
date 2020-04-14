export interface IAdviceGeo {
  map(arg0: (city: { features: { properties: { postcode_city: import("react").ReactNode; }; }[]; }) => JSX.Element): import("react").ReactNode;
  type?: string;
  features?: [
    {
      geometry?: {
        type?: string;
        coordinates?: any[];
      };
      type?: string;
      properties?: {
        neighborhood?: string;
        web_page?: string;
        other_offers?: string;
        telephone?: any;
        long_lat?: string;
        counseling?: any;
        opening_hours?: string;
        lon?: any;
        state?: string;
        location?: string;
        email?: string;
        postcode_city?: any;
        scheduling_app?: string;
        counseling_for?: any;
        self_description?: string;
        address?: string;
        lat?: any;
        institution?: string;
        name?: string;
        language?: string;
        address_adjunct?: string;
        contact_person?: string;
      };
    }
  ];
}

export interface IAdviceGeometry {
  type: string;
  coordinates: any[];
}

export interface IAdviceProperties {
  neighborhood: string;
  web_page: string;
  other_offers: string;
  telephone: any;
  long_lat: string;
  counseling: any;
  opening_hours: string;
  lon: any;
  state: string;
  location: string;
  email: string;
  postcode_city: any;
  scheduling_app: string;
  counseling_for: any;
  self_description: string;
  address: string;
  lat: any;
  institution: string;
  name: string;
  language: string;
  address_adjunct: string;
  contact_person: string;
}
