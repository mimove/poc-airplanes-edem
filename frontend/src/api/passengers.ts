import client from "./client";
import { Passenger, PassengerCreate } from "../types";

export const getPassengers = () =>
  client.get<Passenger[]>("/passengers/").then((r) => r.data);

export const createPassenger = (data: PassengerCreate) =>
  client.post<Passenger>("/passengers/", data).then((r) => r.data);
