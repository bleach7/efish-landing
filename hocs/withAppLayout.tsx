import { AppLayout } from "@/layouts";
import { ComponentType, FC } from "react";

export const withAppLayout = <P extends object>(
  Component: ComponentType<P>
) => {
  const WrappedComponent: FC<P> = (props) => (
    <AppLayout>
      <Component {...props} />
    </AppLayout>
  );

  return WrappedComponent;
};
