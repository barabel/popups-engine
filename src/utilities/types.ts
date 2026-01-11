/** Утилитарный дженерик для обозначения функционального компонента с пропсами children и className */
export type FCClass<P = object> = React.FC<P & React.PropsWithChildren & { className?: string }>;
