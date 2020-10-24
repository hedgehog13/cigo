export interface IOrderModel {
  id?:number,
  first_name: string,
  last_name: string,
  scheduled_date: Date,
  status_id?:number,
  phone?: string,
  email?: string,
  address?: string,
  city?: string,
  state?: string
  zipCode?: string,
  country?: string
}
