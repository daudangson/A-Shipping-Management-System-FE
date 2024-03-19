export enum VesselStatus {
  IN_SERVICE = "in_service",
  OUT_OF_SERVICE = "out_of_service",
}

export enum BookingStatus {
  DRAFT = "draft",
  PENDING_APPROVAL = "pending_approval",
  APPROVED = "approved",
  REJECTED = "rejected",
  CONFIRMED = "confirmed",
  CANCELLED = "cancelled",
  IN_TRANSIT = "in_transit",
  ARRIVED = "arrived",
  DELIVERED = "delivered",
  DELAYED = "delayed",
}

/* 
khi dat pending_approval -> approved, rejected -> confirmed,cancelled -> in_transit -> arrived, delayed -> delivered
*/

export enum ContainerType {
  DRY = "dry",
  REFRIGERATED = "refrigerated",
}

export enum ContainerStatus {
  IN_TRANSIT = "in_transit",
  AT_PORT = "at_port",
}

export enum ContainerFullFlag {
  EMPTY = "Empty",
  FULL = "Full",
}

export enum PortType {
  SEAPORT = "sea_port",
  RIVER_PORT = "river_port",
  INLAND_PORT = "inland_port",
  DRY_PORT = "dry_port",
  FISHING_PORT = "fishing_port",
  CRUISE_PORT = "cruise_port",
  OIL_PORT = "oil_port",
  CONTAINER_TERMINAL = "container_terminal",
  BULK_TERMINAL = "bulk_terminal",
  RO_RO_TERMINAL = "ro_ro_terminal",
}

export enum Continent {
  Africa = "Africa",
  Antarctica = "Antarctica",
  Asia = "Asia",
  Europe = "Europe",
  NorthAmerica = "North America",
  SouthAmerica = "South America",
  Australia = "Australia (Oceania)",
}

export enum Roles {
  ADMIN = "admin",
  USER = "user",
  GUEST = "guest",
  MASTER_ADMIN = "master admin",
}
