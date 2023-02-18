import React, { Component, ErrorInfo, ReactNode } from "react";
// import React, { Component, ErrorInfo, PropsWithChildren, PureComponent, ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(_: Error): State {
    // Update state so the next render will show the fallback UI.
        console.log("Boundary getDerivedStateFromError")
    return { hasError: true };
  }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
      console.log("Boundary DIDCATCH")
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return <h1>Sorry.. there was an error</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;


//################################################################################

// const AppError = ({ error}:{error:Error}) => {
//     switch (error.cause) {
//             case 500:
//             return <>Server ERROR!!!</>;
//         default:
//             return <>Error!!!</>
//     }

        
// }



// class ErrorBoundaryCustom extends PureComponent<PropsWithChildren>{
//     state = { hasError: false, error: null }
    
//     static getDerivedStateFromError(error:Error) {
//         return {hasError: true, error: error}
//     }
// render() {
//     const { hasError, error } = this.state;
//     const { children } = this.props
    
//     if (hasError) {
//         return <AppError error={error!} />
//     }
//     return children
// }

//    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
//     console.error("Uncaught error:", error, errorInfo);
//   }
// }