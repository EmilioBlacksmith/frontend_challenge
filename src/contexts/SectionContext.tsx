import React, { createContext, useContext, useState, ReactNode } from "react";

interface SectionProviderProps {
	children: ReactNode;
}

interface SectionContextProps {
	currentSection: string;
	setCurrentSection: React.Dispatch<React.SetStateAction<string>>;
	selectedMovieId: number | null;
	setSelectedMovieId: React.Dispatch<React.SetStateAction<number | null>>;
}

const SectionContext = createContext<SectionContextProps | undefined>(
	undefined
);

const SectionProvider = ({ children }: SectionProviderProps) => {
	const [currentSection, setCurrentSection] = useState<string>("home");
	const [selectedMovieId, setSelectedMovieId] = useState<number | null>(null);

	return (
		<SectionContext.Provider
			value={{
				currentSection,
				setCurrentSection,
				selectedMovieId,
				setSelectedMovieId,
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
