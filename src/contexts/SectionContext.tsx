import React, { createContext, useContext, useState, ReactNode } from "react";

interface SectionProviderProps {
	children: ReactNode;
}

interface SectionContextProps {
	currentSection: string;
	setCurrentSection: React.Dispatch<React.SetStateAction<string>>;
	selectedMediaId: number | null;
	setSelectedMediaId: React.Dispatch<React.SetStateAction<number | null>>;
	selectedMediaType: string;
	setSelectedMediaType: React.Dispatch<React.SetStateAction<string>>;
}

const SectionContext = createContext<SectionContextProps | undefined>(
	undefined
);

const SectionProvider = ({ children }: SectionProviderProps) => {
	const [currentSection, setCurrentSection] = useState<string>("home");
	const [selectedMediaId, setSelectedMediaId] = useState<number | null>(null);
	const [selectedMediaType, setSelectedMediaType] = useState<string>("");

	return (
		<SectionContext.Provider
			value={{
				currentSection,
				setCurrentSection,
				selectedMediaId,
				setSelectedMediaId,
				selectedMediaType,
				setSelectedMediaType,
			}}
		>
			{children}
		</SectionContext.Provider>
	);
};

const useSection = (): SectionContextProps => {
	const context = useContext(SectionContext);
	if (!context) {
		throw new Error("useSection must be used within a SectionProvider");
	}
	return context;
};

export { SectionProvider, useSection };
