type RequiredKeys<T> = {
  [K in keyof T]-?: {} extends { [P in K]: T[K] } ? never : K;
}[keyof T];

type OptionalKeys<T> = {
  [K in keyof T]-?: {} extends { [P in K]: T[K] } ? K : never;
}[keyof T];

type DeepPartial<T> = T extends object
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : T;

type DeepPartialOptional<T> = {
  [K in RequiredKeys<T>]: DeepPartial<T[K]>;
} & {
  [P in OptionalKeys<T>]?: DeepPartial<T[P]>;
};
