export * from "@stencil/core/internal";

export type PluginOptions = Omit<Less.Options, "filename"> & {
  injectGlobalPaths?: string[];
  injectGlobalSource?: string[];
};
