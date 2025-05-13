import { ReactNode } from "react";

interface LayoutDocumentProps {
	children: ReactNode;
}

const DocumentLayout = ({ children }: LayoutDocumentProps) => {
	return <>{children}</>;
};

export default DocumentLayout;
