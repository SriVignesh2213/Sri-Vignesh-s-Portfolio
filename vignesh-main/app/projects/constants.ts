import type { Project } from './types';

export const projects: Project[] = [
	{
		title: 'CVlect AI',
		url: 'https://github.com/SriVignesh2213/CVlect',
		description:
			'Explainable AI recruitment platform with NLP resume parsing, semantic job matching, explainable candidate ranking, and role-based access control.',
		techStack: [
			'Python',
			'FastAPI',
			'React',
			'TypeScript',
			'Sentence Transformers',
			'PyTorch',
			'PostgreSQL',
			'SQLAlchemy',
			'SHAP',
			'Fairlearn',
			'Docker',
		],
	},
	{
		title: 'Polymer Property Prediction',
		url: 'https://github.com/SriVignesh2213/Polymer-property-prediction',
		description:
			'ML pipeline predicting seven polymer properties from SMILES, achieving a 0.877 leaderboard score with molecular descriptors, ensemble learning, and SHAP explainability.',
		techStack: [
			'Python',
			'RDKit',
			'Pandas',
			'NumPy',
			'Scikit-learn',
			'LightGBM',
			'CatBoost',
			'XGBoost',
			'SHAP',
		],
	},
	{
		title: 'SyncBoard',
		url: 'https://github.com/SriVignesh2213/Collaborative-Kanban-Board',
		description:
			'Real-time collaborative Kanban board with presence, fractional indexing, and secure authentication.',
		techStack: [
			'React',
			'TypeScript',
			'Node.js',
			'Express.js',
			'Socket.IO',
			'PostgreSQL',
			'Prisma',
			'Docker',
		],
	},
	{
		title: 'Habit Loop Mirror',
		url: 'https://github.com/SriVignesh2213/Human-Loop-Mirror',
		description:
			'AI-powered behavioral analytics platform that explains habit loops, tracks intentionality, and recommends offline activities to help users reclaim screen time.',
		techStack: [
			'Python',
			'FastAPI',
			'React',
			'TypeScript',
			'Tailwind CSS',
			'Pandas',
			'NumPy',
			'Scikit-learn',
			'PostgreSQL',
			'Supabase',
			'SQLAlchemy',
			'JWT',
			'Docker',
		],
	},
	{
		title: 'TrueLens AI',
		url: 'https://github.com/SriVignesh2213/TrueLensAI',
		description:
			'Multi-layer image forensics platform using CNN classification, frequency analysis, metadata inspection, forgery localization, explainable heatmaps, and ensemble fraud scoring.',
		techStack: [
			'Python',
			'PyTorch',
			'EfficientNet-B0',
			'FastAPI',
			'React',
			'Tailwind CSS',
			'OpenCV',
			'NumPy',
			'FFT',
			'Grad-CAM',
			'EXIF',
			'Docker',
		],
	},
];
