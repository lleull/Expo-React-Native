// import { StoreConfig } from "../types/State";

export default function configureStore(): any {
  if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
    const config = require("./configureStore.dev").default;
    return config();
  } else {
    const config = require("./configureStore.prod").default;
    return config();
  }
}
