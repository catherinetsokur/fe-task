export type Item = {
  browser: Object,
  campaign: Array,
  computed_browser: Object,
  computed_location: string,
  creation_date: number,
  custom: Object,
  email: string,
  geo: Object,
  host: string,
  id: string,
  images: {
    ['cropped' | 'detail' | 'full_image' | 'grid' | 'list' | 'no_context' | 'screenshot' | 'thumbnail']: Object
  },
  ip: string,
  labels: Array,
  original_size: {
    ['width' | 'height']: number
  },
  performance: number,
  public_id: string,
  rating: number,
  screen: Object,
  site_id: string,
  starred: boolean,
  status: string,
  tags: Array,
  timing: Object,
  url: string,
  viewport: {
    ['width' | 'height']: number
  },
};
