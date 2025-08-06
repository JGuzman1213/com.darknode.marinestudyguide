// Marine Corps Study App - Complete JavaScript Implementation
class MarineStudyApp {
	constructor() {
		this.currentSection = "dashboard";
		this.currentQuestionIndex = 0;
		this.studyData = this.initializeData();
		this.init();
	}

	// Initialize default data structure
	initializeData() {
		const defaultData = {
			flashcards: [
				{
					id: 1,
					question:
						"Who are the two Marines that have received two Medals of Honor?",
					answer: "Major General Smedley Butler and Gunnery Sergeant Dan Daly",
					correctCount: 0,
					totalCount: 0,
					weight: 1,
				},
				{
					id: 2,
					question: "What does 'Feat' mean in Marine Corps context?",
					answer:
						"An act of courage, strength, or skill; a notable achievement or deed",
					correctCount: 0,
					totalCount: 0,
					weight: 1,
				},
				{
					id: 3,
					question: "Who is the most decorated Marine in history?",
					answer: "Lieutenant General Lewis 'Chesty' Puller",
					correctCount: 0,
					totalCount: 0,
					weight: 1,
				},
				{
					id: 4,
					question: "What does EGA stand for in the Marine Corps?",
					answer: "Eagle, Globe, and Anchor",
					correctCount: 0,
					totalCount: 0,
					weight: 1,
				},
				{
					id: 5,
					question: "What does the eagle in the EGA represent?",
					answer: "The United States and its proud defense by the Marine Corps",
					correctCount: 0,
					totalCount: 0,
					weight: 1,
				},
				{
					id: 6,
					question: "What does the globe in the EGA represent?",
					answer: "Worldwide service and presence",
					correctCount: 0,
					totalCount: 0,
					weight: 1,
				},
				{
					id: 7,
					question: "What does the anchor in the EGA represent?",
					answer: "Naval tradition and ties to the U.S. Navy",
					correctCount: 0,
					totalCount: 0,
					weight: 1,
				},
				{
					id: 8,
					question: "What is the Marine Corps motto?",
					answer: "Semper Fidelis – Always Faithful",
					correctCount: 0,
					totalCount: 0,
					weight: 1,
				},
				{
					id: 9,
					question: "What are the Marine Corps core values?",
					answer: "Honor, Courage, Commitment",
					correctCount: 0,
					totalCount: 0,
					weight: 1,
				},
				{
					id: 10,
					question: "What is the significance of the blood stripe?",
					answer: "Honors Marines killed at the Battle of Chapultepec in 1847",
					correctCount: 0,
					totalCount: 0,
					weight: 1,
				},
				{
					id: 11,
					question: "Who was the first female Marine?",
					answer: "Opha May Johnson, enlisted on August 13, 1918",
					correctCount: 0,
					totalCount: 0,
					weight: 1,
				},
				{
					id: 12,
					question: "When and where was the Marine Corps founded?",
					answer:
						"November 10, 1775, at Tun Tavern in Philadelphia, Pennsylvania",
					correctCount: 0,
					totalCount: 0,
					weight: 1,
				},
				{
					id: 13,
					question: "What rifle do Marines typically train with?",
					answer: "M16A4 or M4",
					correctCount: 0,
					totalCount: 0,
					weight: 1,
				},
				{
					id: 14,
					question: "List all 14 Marine Corps Leadership Traits",
					answer:
						"Justice, Judgement, Dependability, Integrity, Decisiveness, Tact, Initiative, Endurance, Bearing, Unselfishness, Courage, Knowledge, Loyalty, Enthusiasm",
					correctCount: 0,
					totalCount: 0,
					weight: 1,
				},
				{
					id: 15,
					question: "What are the 11 General Orders?",
					answer: "Standard responsibilities for Marine sentries while on duty",
					correctCount: 0,
					totalCount: 0,
					weight: 1,
				},
				{
					id: 16,
					question: "What is the first General Order?",
					answer:
						"To take charge of this post and all government property in view.",
					correctCount: 0,
					totalCount: 0,
					weight: 1,
				},
				{
					id: 17,
					question: "What is the Marines’ Hymn?",
					answer: "'From the Halls of Montezuma to the Shores of Tripoli'",
					correctCount: 0,
					totalCount: 0,
					weight: 1,
				},
				{
					id: 18,
					question: "What is the Marine Corps’ primary mission?",
					answer: "Amphibious assault and rapid deployment",
					correctCount: 0,
					totalCount: 0,
					weight: 1,
				},
				{
					id: 19,
					question: "What are the ranks from E-1 to E-9?",
					answer:
						"Private, PFC, Lance Corporal, Corporal, Sergeant, Staff Sergeant, Gunnery Sergeant, Master Sergeant/First Sergeant, Master Gunnery Sergeant/Sergeant Major",
					correctCount: 0,
					totalCount: 0,
					weight: 1,
				},
				{
					id: 20,
					question: "What is MCMAP?",
					answer: "Marine Corps Martial Arts Program",
					correctCount: 0,
					totalCount: 0,
					weight: 1,
				},
				{
					id: 21,
					question: "What is the Rifleman’s Creed?",
					answer:
						"A statement emphasizing a Marine's relationship with their rifle",
					correctCount: 0,
					totalCount: 0,
					weight: 1,
				},
				{
					id: 22,
					question: "What is the Uniform Code of Military Justice (UCMJ)?",
					answer: "Legal foundation for military law",
					correctCount: 0,
					totalCount: 0,
					weight: 1,
				},
				{
					id: 23,
					question: "What is Non-Judicial Punishment (NJP)?",
					answer: "Disciplinary action administered by a commander",
					correctCount: 0,
					totalCount: 0,
					weight: 1,
				},
				{
					id: 24,
					question: "Who is the Commandant of the Marine Corps?",
					answer: "The senior officer of the U.S. Marine Corps",
					correctCount: 0,
					totalCount: 0,
					weight: 1,
				},
				{
					id: 25,
					question: "What are the three phases of Marine Corps bootcamp?",
					answer: "Receiving, Training, and Graduation",
					correctCount: 0,
					totalCount: 0,
					weight: 1,
				},
				{
					id: 26,
					question: "What is the Crucible?",
					answer:
						"A 54-hour field event that tests recruits' physical and mental endurance",
					correctCount: 0,
					totalCount: 0,
					weight: 1,
				},
				{
					id: 27,
					question: "What is the meaning of 'Ooh-rah'?",
					answer: "A motivational cry used by Marines",
					correctCount: 0,
					totalCount: 0,
					weight: 1,
				},
				{
					id: 28,
					question: "What is a firewatch?",
					answer: "A duty where a Marine stands watch for safety and order",
					correctCount: 0,
					totalCount: 0,
					weight: 1,
				},
				{
					id: 29,
					question: "What does the term 'Jarhead' refer to?",
					answer:
						"A slang term for a Marine, referencing the high-and-tight haircut",
					correctCount: 0,
					totalCount: 0,
					weight: 1,
				},
				{
					id: 30,
					question: "What is the role of a drill instructor?",
					answer: "To train and discipline recruits in bootcamp",
					correctCount: 0,
					totalCount: 0,
					weight: 1,
				},
				{
					id: 31,
					question: "What is a 'Liberty Card'?",
					answer: "A pass granting permission for time off or leave",
					correctCount: 0,
					totalCount: 0,
					weight: 1,
				},
				{
					id: 32,
					question: "What is the maximum score on the Marine Corps PFT?",
					answer: "300",
					correctCount: 0,
					totalCount: 0,
					weight: 1,
				},
				{
					id: 33,
					question: "What does 'PT' stand for?",
					answer: "Physical Training",
					correctCount: 0,
					totalCount: 0,
					weight: 1,
				},
				{
					id: 34,
					question: "What are the three events of the PFT?",
					answer: "Pull-ups or push-ups, crunches or plank, and a 3-mile run",
					correctCount: 0,
					totalCount: 0,
					weight: 1,
				},
				{
					id: 35,
					question: "What is the Delayed Entry Program (DEP)?",
					answer:
						"A program that prepares future Marines before shipping to bootcamp",
					correctCount: 0,
					totalCount: 0,
					weight: 1,
				},
				{
					id: 36,
					question:
						"What is the nickname for Marine Corps Recruit Depot San Diego?",
					answer: "Hollywood",
					correctCount: 0,
					totalCount: 0,
					weight: 1,
				},
				{
					id: 37,
					question:
						"What is the nickname for Marine Corps Recruit Depot Parris Island?",
					answer: "The Island",
					correctCount: 0,
					totalCount: 0,
					weight: 1,
				},
				{
					id: 38,
					question: "What is the name of the sword carried by Marine NCOs?",
					answer: "NCO Sword",
					correctCount: 0,
					totalCount: 0,
					weight: 1,
				},
				{
					id: 39,
					question: "What is the name of the Marine Corps dress uniform?",
					answer: "Dress Blues",
					correctCount: 0,
					totalCount: 0,
					weight: 1,
				},
			],
			multipleChoice: [
				{
					id: 1,
					question: "When was the Marine Corps established?",
					options: [
						"November 10, 1775",
						"July 4, 1776",
						"December 7, 1941",
						"June 6, 1944",
					],
					correctAnswer: 0,
					correctCount: 0,
					totalCount: 0,
					weight: 1,
				},
				{
					id: 2,
					question: "Where was the Marine Corps born?",
					options: [
						"Boston Tea Party",
						"Independence Hall",
						"Tun Tavern, Philadelphia",
						"Mount Vernon",
					],
					correctAnswer: 2,
					correctCount: 0,
					totalCount: 0,
					weight: 1,
				},
				{
					id: 3,
					question: "Who is known as 'Chesty' Puller?",
					options: [
						"The first Marine",
						"The most decorated Marine",
						"The first female Marine",
						"The Marine Corps mascot",
					],
					correctAnswer: 1,
					correctCount: 0,
					totalCount: 0,
					weight: 1,
				},
				{
					id: 4,
					question: "What does the Eagle in the EGA represent?",
					options: ["Sea power", "Air power", "Land power", "Freedom"],
					correctAnswer: 1,
					correctCount: 0,
					totalCount: 0,
					weight: 1,
				},
				{
					id: 5,
					question: "How many Marine Corps Leadership Traits are there?",
					options: ["12", "13", "14", "15"],
					correctAnswer: 2,
					correctCount: 0,
					totalCount: 0,
					weight: 1,
				},
				{
					id: 6,
					question: "What are the three components of the Marine Corps emblem?",
					options: [
						"Eagle, Shield, Anchor",
						"Eagle, Globe, Anchor",
						"Flag, Globe, Sword",
						"Star, Anchor, Rifle",
					],
					correctAnswer: 1,
					correctCount: 0,
					totalCount: 0,
					weight: 1,
				},
				{
					id: 7,
					question: "What is the Marine Corps motto?",
					options: [
						"Semper Paratus",
						"Semper Fi",
						"Semper Fidelis",
						"Semper Honor",
					],
					correctAnswer: 2,
					correctCount: 0,
					totalCount: 0,
					weight: 1,
				},
				{
					id: 8,
					question: "What is the purpose of the Crucible?",
					options: [
						"Weapons training",
						"Final test of endurance",
						"Graduation ceremony",
						"Fitness evaluation",
					],
					correctAnswer: 1,
					correctCount: 0,
					totalCount: 0,
					weight: 1,
				},
				{
					id: 9,
					question: "Which Marine earned five Navy Crosses?",
					options: [
						"Chesty Puller",
						"Smedley Butler",
						"Dan Daly",
						"John Basilone",
					],
					correctAnswer: 0,
					correctCount: 0,
					totalCount: 0,
					weight: 1,
				},
				{
					id: 10,
					question: "How long is Marine bootcamp?",
					options: ["10 weeks", "12 weeks", "13 weeks", "14 weeks"],
					correctAnswer: 2,
					correctCount: 0,
					totalCount: 0,
					weight: 1,
				},
				{
					id: 11,
					question:
						"Which core value means doing what’s right even when no one is looking?",
					options: ["Courage", "Honor", "Loyalty", "Discipline"],
					correctAnswer: 1,
					correctCount: 0,
					totalCount: 0,
					weight: 1,
				},
				{
					id: 12,
					question: "What is the Marine Corps birthday?",
					options: [
						"June 14, 1775",
						"July 4, 1776",
						"November 10, 1775",
						"December 7, 1941",
					],
					correctAnswer: 2,
					correctCount: 0,
					totalCount: 0,
					weight: 1,
				},
				{
					id: 13,
					question:
						"Which weapon is used for Marine marksmanship qualification?",
					options: ["M9", "M16/M4", "M249", "M240B"],
					correctAnswer: 1,
					correctCount: 0,
					totalCount: 0,
					weight: 1,
				},
				{
					id: 14,
					question: "What are the phases of bootcamp?",
					options: [
						"Prep, Training, Battle",
						"Beginner, Intermediate, Expert",
						"Receiving, Training, Graduation",
						"Arrival, Combat, Evaluation",
					],
					correctAnswer: 2,
					correctCount: 0,
					totalCount: 0,
					weight: 1,
				},
				{
					id: 15,
					question: "What is MCMAP?",
					options: [
						"Marine Combat Manual",
						"Marine Core Mechanics",
						"Martial Arts Program",
						"Marksmanship Course",
					],
					correctAnswer: 2,
					correctCount: 0,
					totalCount: 0,
					weight: 1,
				},
				{
					id: 16,
					question:
						"Who is known for saying 'Come on, you sons of b****es, do you want to live forever?'?",
					options: [
						"Dan Daly",
						"Chesty Puller",
						"John Basilone",
						"Smedley Butler",
					],
					correctAnswer: 0,
					correctCount: 0,
					totalCount: 0,
					weight: 1,
				},
				{
					id: 17,
					question: "What is the highest enlisted rank in the Marine Corps?",
					options: [
						"Gunnery Sergeant",
						"First Sergeant",
						"Sergeant Major of the Marine Corps",
						"Master Gunnery Sergeant",
					],
					correctAnswer: 2,
					correctCount: 0,
					totalCount: 0,
					weight: 1,
				},
				{
					id: 18,
					question: "What color is the blood stripe?",
					options: ["Black", "Blue", "Gold", "Red"],
					correctAnswer: 3,
					correctCount: 0,
					totalCount: 0,
					weight: 1,
				},
				{
					id: 19,
					question: "Which uniform is worn during formal ceremonies?",
					options: ["Cammies", "Service Alphas", "Dress Blues", "PT gear"],
					correctAnswer: 2,
					correctCount: 0,
					totalCount: 0,
					weight: 1,
				},
			],
			trueFalse: [
				{
					id: 1,
					question: "The Marine Corps was established on November 10, 1775.",
					answer: true,
					correctCount: 0,
					totalCount: 0,
					weight: 1,
				},
				{
					id: 2,
					question: "Opha May Johnson was the first female Marine.",
					answer: true,
					correctCount: 0,
					totalCount: 0,
					weight: 1,
				},
				{
					id: 3,
					question: "There are 12 Marine Corps Leadership Traits.",
					answer: false,
					correctCount: 0,
					totalCount: 0,
					weight: 1,
				},
				{
					id: 4,
					question: "The Marine Corps Code of Conduct has 6 articles.",
					answer: true,
					correctCount: 0,
					totalCount: 0,
					weight: 1,
				},
				{
					id: 5,
					question: "There are 10 Marine Corps General Orders.",
					answer: false,
					correctCount: 0,
					totalCount: 0,
					weight: 1,
				},
				{
					id: 6,
					question: "The eagle in the EGA represents the United States.",
					answer: true,
					correctCount: 0,
					totalCount: 0,
					weight: 1,
				},
				{
					id: 7,
					question: "The Marine Corps is part of the Department of the Army.",
					answer: false,
					correctCount: 0,
					totalCount: 0,
					weight: 1,
				},
				{
					id: 8,
					question: "Semper Fidelis means 'Always Faithful'.",
					answer: true,
					correctCount: 0,
					totalCount: 0,
					weight: 1,
				},
				{
					id: 9,
					question: "The globe in the EGA stands for land dominance.",
					answer: false,
					correctCount: 0,
					totalCount: 0,
					weight: 1,
				},
				{
					id: 10,
					question: "The anchor represents the Navy heritage of the Corps.",
					answer: true,
					correctCount: 0,
					totalCount: 0,
					weight: 1,
				},
				{
					id: 11,
					question: "Chesty Puller was awarded five Navy Crosses.",
					answer: true,
					correctCount: 0,
					totalCount: 0,
					weight: 1,
				},
				{
					id: 12,
					question: "The blood stripe honors Marines killed at Iwo Jima.",
					answer: false,
					correctCount: 0,
					totalCount: 0,
					weight: 1,
				},
				{
					id: 13,
					question: "The first General Order is to take charge of this post.",
					answer: true,
					correctCount: 0,
					totalCount: 0,
					weight: 1,
				},
				{
					id: 14,
					question: "The Crucible is 72 hours long.",
					answer: false,
					correctCount: 0,
					totalCount: 0,
					weight: 1,
				},
				{
					id: 15,
					question: "Bootcamp is 13 weeks long.",
					answer: true,
					correctCount: 0,
					totalCount: 0,
					weight: 1,
				},
				{
					id: 16,
					question: "The M16A4/M4 is commonly used for marksmanship.",
					answer: true,
					correctCount: 0,
					totalCount: 0,
					weight: 1,
				},
				{
					id: 17,
					question: "PT stands for Physical Training.",
					answer: true,
					correctCount: 0,
					totalCount: 0,
					weight: 1,
				},
				{
					id: 18,
					question: "There are 14 Marine Corps Leadership Traits.",
					answer: true,
					correctCount: 0,
					totalCount: 0,
					weight: 1,
				},
				{
					id: 19,
					question:
						"The Marines' Hymn is the oldest official song in the U.S. military.",
					answer: true,
					correctCount: 0,
					totalCount: 0,
					weight: 1,
				},
			],
		};

		// Load from localStorage or use default
		const savedData = localStorage.getItem("marineStudyData");
		return savedData ? JSON.parse(savedData) : defaultData;
	}

	// Save data to localStorage
	saveData() {
		localStorage.setItem("marineStudyData", JSON.stringify(this.studyData));
	}

	// Initialize the application
	init() {
		this.setupNavigation();
		this.setupFlashcards();
		this.setupMultipleChoice();
		this.setupTrueFalse();
		this.setupRanks();
		this.setupReference();
		this.updateDashboard();
		this.showSection("dashboard");
		const menuToggleBtn = document.getElementById("menu-toggle-btn");
		const mobileMenu = document.getElementById("mobile-menu");

		menuToggleBtn.addEventListener("click", () => {
			mobileMenu.classList.toggle("open");
			menuToggleBtn.textContent = mobileMenu.classList.contains("open")
				? "✖"
				: "☰";
		});
	}

	// Navigation setup
	setupNavigation() {
		const navButtons = document.querySelectorAll(".nav-card");
		navButtons.forEach((button) => {
			button.addEventListener("click", (e) => {
				const section = e.currentTarget.dataset.section;
				this.showSection(section);
			});
		});
	}

	// Show specific Section
	showSection(sectionName) {
		// Update active section name beside the menu burger
		const nameMap = {
			dashboard: "Dashboard",
			flashcards: "Flashcards",
			"multiple-choice": "Quiz",
			"true-false": "True/False",
			ranks: "Ranks",
			reference: "Reference",
			"knowledge-docs": "Knowledge Docs",
		};

		const sectionLabel = nameMap[sectionName] || sectionName;
		document.getElementById("active-section-name").textContent = sectionLabel;

		// Close mobile menu on section select (mobile UX)
		// 🧠 Fix: reset burger icon when section is clicked
		const mobileMenu = document.getElementById("mobile-menu");
		const menuToggleBtn = document.getElementById("menu-toggle-btn");
		mobileMenu.classList.remove("open");
		menuToggleBtn.textContent = "☰";

		// Hide all sections
		document.querySelectorAll(".content-section").forEach((section) => {
			section.classList.remove("active");
		});

		// Remove active class from nav buttons
		document.querySelectorAll(".nav-card").forEach((button) => {
			button.classList.remove("active");
		});

		// Show selected section
		document.getElementById(sectionName).classList.add("active");
		document
			.querySelector(`[data-section="${sectionName}"]`)
			.classList.add("active");

		this.currentSection = sectionName;

		// Auto scroll only if not dashboard
		if (sectionName !== "dashboard") {
			setTimeout(() => {
				const mainContent = document.querySelector(".main-content");
				if (mainContent) {
					mainContent.scrollIntoView({
						behavior: "smooth",
						block: "start",
					});
				}
			}, 350);
		}

		// Update dashboard when switching to it
		if (sectionName === "dashboard") {
			this.updateDashboard();
		}
	}

	// Update dashboard statistics
	updateDashboard() {
		const sections = ["flashcards", "multipleChoice", "trueFalse"];
		const prefixes = ["fc", "mc", "tf"];
		let totalCorrect = 0;
		let totalAnswered = 0;

		sections.forEach((section, index) => {
			const data = this.studyData[section];
			const correct = data.reduce((sum, item) => sum + item.correctCount, 0);
			const total = data.reduce((sum, item) => sum + item.totalCount, 0);
			const accuracy = total > 0 ? Math.round((correct / total) * 100) : 0;

			const prefix = prefixes[index];
			document.getElementById(`dashboard-${prefix}-correct`).textContent =
				correct;
			document.getElementById(`dashboard-${prefix}-total`).textContent = total;
			document.getElementById(
				`dashboard-${prefix}-accuracy`
			).textContent = `${accuracy}%`;
			document.getElementById(
				`dashboard-${prefix}-progress`
			).style.width = `${accuracy}%`;

			totalCorrect += correct;
			totalAnswered += total;
		});

		const overallProgress =
			totalAnswered > 0 ? Math.round((totalCorrect / totalAnswered) * 100) : 0;
		document.getElementById(
			"overall-progress"
		).textContent = `${overallProgress}%`;
	}

	// Flashcards functionality
	setupFlashcards() {
		const startBtn = document.getElementById("start-flashcards");
		const flipBtn = document.getElementById("flip-flashcard");
		const rightBtn = document.getElementById("fc-got-right");
		const wrongBtn = document.getElementById("fc-got-wrong");
		const nextBtn = document.getElementById("next-flashcard");
		const editBtn = document.getElementById("edit-flashcards-btn");
		const resetBtn = document.getElementById("reset-flashcards-btn");

		startBtn.addEventListener("click", () => this.startFlashcards());
		flipBtn.addEventListener("click", () => this.flipFlashcard());
		rightBtn.addEventListener("click", () => this.answerFlashcard(true));
		wrongBtn.addEventListener("click", () => this.answerFlashcard(false));
		nextBtn.addEventListener("click", () => this.nextFlashcard());
		editBtn.addEventListener("click", () => this.toggleFlashcardEdit());
		resetBtn.addEventListener("click", () => this.resetFlashcardProgress());

		this.setupFlashcardEdit();
	}

	startFlashcards() {
		this.currentQuestionIndex = 0;
		this.shuffleFlashcards();
		this.showFlashcard();

		document.getElementById("start-flashcards").style.display = "none";
		document.getElementById("flip-flashcard").style.display = "inline-flex";
	}

	shuffleFlashcards() {
		// Create weighted array (wrong answers appear more frequently)
		const weighted = [];
		this.studyData.flashcards.forEach((card) => {
			const weight = Math.max(
				1,
				card.weight + (card.totalCount - card.correctCount)
			);
			for (let i = 0; i < weight; i++) {
				weighted.push(card);
			}
		});

		// Shuffle the weighted array
		for (let i = weighted.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[weighted[i], weighted[j]] = [weighted[j], weighted[i]];
		}

		this.shuffledFlashcards = weighted;
	}

	showFlashcard() {
		if (this.shuffledFlashcards && this.shuffledFlashcards.length > 0) {
			const card =
				this.shuffledFlashcards[
					this.currentQuestionIndex % this.shuffledFlashcards.length
				];
			document.getElementById("flashcard-question").textContent = card.question;
			document.getElementById("flashcard-answer").textContent = card.answer;
			document.getElementById("fc-current").textContent =
				this.currentQuestionIndex + 1;
			document.getElementById("fc-total").textContent =
				this.shuffledFlashcards.length;

			const progress =
				((this.currentQuestionIndex + 1) / this.shuffledFlashcards.length) *
				100;
			document.getElementById("fc-progress").style.width = `${progress}%`;

			// Reset card flip
			document.getElementById("flashcard").classList.remove("flipped");
		}
	}

	flipFlashcard() {
		document.getElementById("flashcard").classList.add("flipped");
		document.getElementById("flip-flashcard").style.display = "none";
		document.getElementById("flashcard-answer-controls").style.display = "flex";
	}

	answerFlashcard(correct) {
		const card =
			this.shuffledFlashcards[
				this.currentQuestionIndex % this.shuffledFlashcards.length
			];
		const originalCard = this.studyData.flashcards.find(
			(c) => c.id === card.id
		);

		originalCard.totalCount++;
		if (correct) {
			originalCard.correctCount++;
			originalCard.weight = Math.max(1, originalCard.weight - 0.1);
		} else {
			originalCard.weight += 0.5;
		}

		this.saveData();

		document.getElementById("flashcard-answer-controls").style.display = "none";
		document.getElementById("next-flashcard").style.display = "inline-flex";

		this.showNotification(
			correct ? "Correct! Well done!" : "Keep studying this one!",
			correct ? "success" : "error"
		);
	}

	nextFlashcard() {
		this.currentQuestionIndex++;
		if (this.currentQuestionIndex >= this.shuffledFlashcards.length) {
			this.endFlashcardSession();
		} else {
			this.showFlashcard();
			document.getElementById("flip-flashcard").style.display = "inline-flex";
			document.getElementById("next-flashcard").style.display = "none";
		}
	}

	endFlashcardSession() {
		document.getElementById("start-flashcards").style.display = "inline-flex";
		document.getElementById("flip-flashcard").style.display = "none";
		document.getElementById("next-flashcard").style.display = "none";
		document.getElementById("flashcard-question").textContent =
			'Great job! Click "Start Studying" to continue.';
		document.getElementById("fc-progress").style.width = "100%";
		this.showNotification("Flashcard session completed!", "success");
	}

	// Flashcard editing
	setupFlashcardEdit() {
		document
			.getElementById("exit-fc-edit")
			.addEventListener("click", () => this.toggleFlashcardEdit());
		document
			.getElementById("add-flashcard")
			.addEventListener("click", () => this.addFlashcard());
		this.renderFlashcardList();
	}

	toggleFlashcardEdit() {
		const studyMode = document.getElementById("flashcards-study-mode");
		const editMode = document.getElementById("flashcards-edit-mode");

		if (editMode.style.display === "none") {
			studyMode.style.display = "none";
			editMode.style.display = "block";
			this.renderFlashcardList();
		} else {
			studyMode.style.display = "block";
			editMode.style.display = "none";
		}
	}

	addFlashcard() {
		const question = document.getElementById("new-fc-question").value.trim();
		const answer = document.getElementById("new-fc-answer").value.trim();

		if (!question || !answer) {
			this.showNotification("Please fill in both question and answer", "error");
			return;
		}

		const newCard = {
			id: Date.now(),
			question,
			answer,
			correctCount: 0,
			totalCount: 0,
			weight: 1,
		};

		this.studyData.flashcards.push(newCard);
		this.saveData();
		this.renderFlashcardList();

		document.getElementById("new-fc-question").value = "";
		document.getElementById("new-fc-answer").value = "";

		this.showNotification("Flashcard added successfully!", "success");
	}

	renderFlashcardList() {
		const container = document.getElementById("flashcards-list");
		container.innerHTML = "";

		this.studyData.flashcards.forEach((card) => {
			const div = document.createElement("div");
			div.className = "edit-item";
			div.innerHTML = `
                <div class="edit-item-header">
                    <strong>Q: ${card.question}</strong>
                    <button class="delete-btn" onclick="app.deleteFlashcard(${card.id})">Delete</button>
                </div>
                <p><strong>A:</strong> ${card.answer}</p>
                <p><small>Correct: ${card.correctCount}/${card.totalCount}</small></p>
            `;
			container.appendChild(div);
		});
	}

	deleteFlashcard(id) {
		if (confirm("Are you sure you want to delete this flashcard?")) {
			this.studyData.flashcards = this.studyData.flashcards.filter(
				(card) => card.id !== id
			);
			this.saveData();
			this.renderFlashcardList();
			this.showNotification("Flashcard deleted", "info");
		}
	}

	resetFlashcardProgress() {
		if (confirm("Are you sure you want to reset all flashcard progress?")) {
			this.studyData.flashcards.forEach((card) => {
				card.correctCount = 0;
				card.totalCount = 0;
				card.weight = 1;
			});
			this.saveData();
			this.updateDashboard();
			this.showNotification("Flashcard progress reset", "info");
		}
	}

	// Multiple Choice functionality
	setupMultipleChoice() {
		document
			.getElementById("start-mc")
			.addEventListener("click", () => this.startMultipleChoice());
		document
			.getElementById("next-mc")
			.addEventListener("click", () => this.nextMultipleChoice());
		document
			.getElementById("edit-mc-btn")
			.addEventListener("click", () => this.toggleMultipleChoiceEdit());
		document
			.getElementById("reset-mc-btn")
			.addEventListener("click", () => this.resetMultipleChoiceProgress());

		this.setupMultipleChoiceEdit();
	}

	startMultipleChoice() {
		this.currentQuestionIndex = 0;
		this.shuffleMultipleChoice();
		this.showMultipleChoiceQuestion();

		document.getElementById("start-mc").style.display = "none";
	}

	shuffleMultipleChoice() {
		const weighted = [];
		this.studyData.multipleChoice.forEach((question) => {
			const weight = Math.max(
				1,
				question.weight + (question.totalCount - question.correctCount)
			);
			for (let i = 0; i < weight; i++) {
				weighted.push(question);
			}
		});

		for (let i = weighted.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[weighted[i], weighted[j]] = [weighted[j], weighted[i]];
		}

		this.shuffledMultipleChoice = weighted;
	}

	showMultipleChoiceQuestion() {
		if (this.shuffledMultipleChoice && this.shuffledMultipleChoice.length > 0) {
			const question =
				this.shuffledMultipleChoice[
					this.currentQuestionIndex % this.shuffledMultipleChoice.length
				];
			document.getElementById("mc-question").textContent = question.question;
			document.getElementById("mc-current").textContent =
				this.currentQuestionIndex + 1;
			document.getElementById("mc-total").textContent =
				this.shuffledMultipleChoice.length;

			const progress =
				((this.currentQuestionIndex + 1) / this.shuffledMultipleChoice.length) *
				100;
			document.getElementById("mc-progress").style.width = `${progress}%`;

			const optionsContainer = document.getElementById("mc-options");
			optionsContainer.innerHTML = "";

			question.options.forEach((option, index) => {
				const button = document.createElement("button");
				button.className = "option-btn";
				button.textContent = option;
				button.addEventListener("click", () =>
					this.answerMultipleChoice(index)
				);
				optionsContainer.appendChild(button);
			});
		}
	}

	answerMultipleChoice(selectedIndex) {
		const question =
			this.shuffledMultipleChoice[
				this.currentQuestionIndex % this.shuffledMultipleChoice.length
			];
		const originalQuestion = this.studyData.multipleChoice.find(
			(q) => q.id === question.id
		);
		const correct = selectedIndex === question.correctAnswer;

		originalQuestion.totalCount++;
		if (correct) {
			originalQuestion.correctCount++;
			originalQuestion.weight = Math.max(1, originalQuestion.weight - 0.1);
		} else {
			originalQuestion.weight += 0.5;
		}

		this.saveData();

		// Show visual feedback
		const buttons = document.querySelectorAll("#mc-options .option-btn");
		buttons.forEach((btn, index) => {
			btn.classList.add("disabled");
			if (index === question.correctAnswer) {
				btn.classList.add("correct");
			} else if (index === selectedIndex && !correct) {
				btn.classList.add("incorrect");
			}
		});

		document.getElementById("next-mc").style.display = "inline-flex";
		this.showNotification(
			correct ? "Correct!" : "Incorrect. Study this one more!",
			correct ? "success" : "error"
		);
	}

	nextMultipleChoice() {
		this.currentQuestionIndex++;
		if (this.currentQuestionIndex >= this.shuffledMultipleChoice.length) {
			this.endMultipleChoiceSession();
		} else {
			this.showMultipleChoiceQuestion();
			document.getElementById("next-mc").style.display = "none";
		}
	}

	endMultipleChoiceSession() {
		document.getElementById("start-mc").style.display = "inline-flex";
		document.getElementById("mc-question").textContent =
			'Quiz completed! Click "Start Quiz" to try again.';
		document.getElementById("mc-options").innerHTML = "";
		document.getElementById("mc-progress").style.width = "100%";
		this.showNotification("Multiple choice session completed!", "success");
	}

	// Multiple Choice editing
	setupMultipleChoiceEdit() {
		document
			.getElementById("exit-mc-edit")
			.addEventListener("click", () => this.toggleMultipleChoiceEdit());
		document
			.getElementById("add-mc")
			.addEventListener("click", () => this.addMultipleChoice());
		this.renderMultipleChoiceList();
	}

	toggleMultipleChoiceEdit() {
		const studyMode = document.getElementById("mc-study-mode");
		const editMode = document.getElementById("mc-edit-mode");

		if (editMode.style.display === "none") {
			studyMode.style.display = "none";
			editMode.style.display = "block";
			this.renderMultipleChoiceList();
		} else {
			studyMode.style.display = "block";
			editMode.style.display = "none";
		}
	}

	addMultipleChoice() {
		const question = document.getElementById("new-mc-question").value.trim();
		const option1 = document.getElementById("new-mc-option1").value.trim();
		const option2 = document.getElementById("new-mc-option2").value.trim();
		const option3 = document.getElementById("new-mc-option3").value.trim();
		const option4 = document.getElementById("new-mc-option4").value.trim();

		if (!question || !option1 || !option2 || !option3 || !option4) {
			this.showNotification("Please fill in all fields", "error");
			return;
		}

		const newQuestion = {
			id: Date.now(),
			question,
			options: [option1, option2, option3, option4],
			correctAnswer: 0, // First option is always correct
			correctCount: 0,
			totalCount: 0,
			weight: 1,
		};

		this.studyData.multipleChoice.push(newQuestion);
		this.saveData();
		this.renderMultipleChoiceList();

		// Clear form
		document.getElementById("new-mc-question").value = "";
		document.getElementById("new-mc-option1").value = "";
		document.getElementById("new-mc-option2").value = "";
		document.getElementById("new-mc-option3").value = "";
		document.getElementById("new-mc-option4").value = "";

		this.showNotification("Question added successfully!", "success");
	}

	renderMultipleChoiceList() {
		const container = document.getElementById("mc-list");
		container.innerHTML = "";

		this.studyData.multipleChoice.forEach((question) => {
			const div = document.createElement("div");
			div.className = "edit-item";
			div.innerHTML = `
                <div class="edit-item-header">
                    <strong>Q: ${question.question}</strong>
                    <button class="delete-btn" onclick="app.deleteMultipleChoice(${
											question.id
										})">Delete</button>
                </div>
                <p><strong>Options:</strong></p>
                <ul>
                    ${question.options
											.map(
												(option, index) =>
													`<li${
														index === question.correctAnswer
															? ' style="color: var(--success-green); font-weight: bold;"'
															: ""
													}>${option}</li>`
											)
											.join("")}
                </ul>
                <p><small>Correct: ${question.correctCount}/${
				question.totalCount
			}</small></p>
            `;
			container.appendChild(div);
		});
	}

	deleteMultipleChoice(id) {
		if (confirm("Are you sure you want to delete this question?")) {
			this.studyData.multipleChoice = this.studyData.multipleChoice.filter(
				(q) => q.id !== id
			);
			this.saveData();
			this.renderMultipleChoiceList();
			this.showNotification("Question deleted", "info");
		}
	}

	resetMultipleChoiceProgress() {
		if (
			confirm("Are you sure you want to reset all multiple choice progress?")
		) {
			this.studyData.multipleChoice.forEach((question) => {
				question.correctCount = 0;
				question.totalCount = 0;
				question.weight = 1;
			});
			this.saveData();
			this.updateDashboard();
			this.showNotification("Multiple choice progress reset", "info");
		}
	}

	// True/False functionality
	setupTrueFalse() {
		document
			.getElementById("start-tf")
			.addEventListener("click", () => this.startTrueFalse());
		document
			.getElementById("next-tf")
			.addEventListener("click", () => this.nextTrueFalse());
		document
			.getElementById("tf-true-btn")
			.addEventListener("click", () => this.answerTrueFalse(true));
		document
			.getElementById("tf-false-btn")
			.addEventListener("click", () => this.answerTrueFalse(false));
		document
			.getElementById("edit-tf-btn")
			.addEventListener("click", () => this.toggleTrueFalseEdit());
		document
			.getElementById("reset-tf-btn")
			.addEventListener("click", () => this.resetTrueFalseProgress());

		this.setupTrueFalseEdit();
	}

	startTrueFalse() {
		this.currentQuestionIndex = 0;
		this.shuffleTrueFalse();
		this.showTrueFalseQuestion();

		document.getElementById("start-tf").style.display = "none";
		document.getElementById("tf-true-btn").style.display = "flex";
		document.getElementById("tf-false-btn").style.display = "flex";
	}

	shuffleTrueFalse() {
		const weighted = [];
		this.studyData.trueFalse.forEach((question) => {
			const weight = Math.max(
				1,
				question.weight + (question.totalCount - question.correctCount)
			);
			for (let i = 0; i < weight; i++) {
				weighted.push(question);
			}
		});

		for (let i = weighted.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[weighted[i], weighted[j]] = [weighted[j], weighted[i]];
		}

		this.shuffledTrueFalse = weighted;
	}

	showTrueFalseQuestion() {
		if (this.shuffledTrueFalse && this.shuffledTrueFalse.length > 0) {
			const question =
				this.shuffledTrueFalse[
					this.currentQuestionIndex % this.shuffledTrueFalse.length
				];
			document.getElementById("tf-question").textContent = question.question;
			document.getElementById("tf-current").textContent =
				this.currentQuestionIndex + 1;
			document.getElementById("tf-total").textContent =
				this.shuffledTrueFalse.length;

			const progress =
				((this.currentQuestionIndex + 1) / this.shuffledTrueFalse.length) * 100;
			document.getElementById("tf-progress").style.width = `${progress}%`;

			// Reset button states
			const trueBtn = document.getElementById("tf-true-btn");
			const falseBtn = document.getElementById("tf-false-btn");
			trueBtn.classList.remove("correct", "incorrect", "disabled");
			falseBtn.classList.remove("correct", "incorrect", "disabled");
		}
	}

	answerTrueFalse(selectedAnswer) {
		const question =
			this.shuffledTrueFalse[
				this.currentQuestionIndex % this.shuffledTrueFalse.length
			];
		const originalQuestion = this.studyData.trueFalse.find(
			(q) => q.id === question.id
		);
		const correct = selectedAnswer === question.answer;

		originalQuestion.totalCount++;
		if (correct) {
			originalQuestion.correctCount++;
			originalQuestion.weight = Math.max(1, originalQuestion.weight - 0.1);
		} else {
			originalQuestion.weight += 0.5;
		}

		this.saveData();

		// Show visual feedback
		const trueBtn = document.getElementById("tf-true-btn");
		const falseBtn = document.getElementById("tf-false-btn");

		trueBtn.classList.add("disabled");
		falseBtn.classList.add("disabled");

		if (question.answer === true) {
			trueBtn.classList.add("correct");
			if (!correct) falseBtn.classList.add("incorrect");
		} else {
			falseBtn.classList.add("correct");
			if (!correct) trueBtn.classList.add("incorrect");
		}

		document.getElementById("next-tf").style.display = "inline-flex";
		this.showNotification(
			correct ? "Correct!" : "Incorrect. Remember this one!",
			correct ? "success" : "error"
		);
	}

	nextTrueFalse() {
		this.currentQuestionIndex++;
		if (this.currentQuestionIndex >= this.shuffledTrueFalse.length) {
			this.endTrueFalseSession();
		} else {
			this.showTrueFalseQuestion();
			document.getElementById("next-tf").style.display = "none";
		}
	}

	endTrueFalseSession() {
		document.getElementById("start-tf").style.display = "inline-flex";
		document.getElementById("tf-true-btn").style.display = "none";
		document.getElementById("tf-false-btn").style.display = "none";
		document.getElementById("tf-question").textContent =
			'Quiz completed! Click "Start Quiz" to try again.';
		document.getElementById("tf-progress").style.width = "100%";
		this.showNotification("True/False session completed!", "success");
	}

	// True/False editing
	setupTrueFalseEdit() {
		document
			.getElementById("exit-tf-edit")
			.addEventListener("click", () => this.toggleTrueFalseEdit());
		document
			.getElementById("add-tf")
			.addEventListener("click", () => this.addTrueFalse());
		this.renderTrueFalseList();
	}

	toggleTrueFalseEdit() {
		const studyMode = document.getElementById("tf-study-mode");
		const editMode = document.getElementById("tf-edit-mode");

		if (editMode.style.display === "none") {
			studyMode.style.display = "none";
			editMode.style.display = "block";
			this.renderTrueFalseList();
		} else {
			studyMode.style.display = "block";
			editMode.style.display = "none";
		}
	}

	addTrueFalse() {
		const question = document.getElementById("new-tf-question").value.trim();
		const answer = document.getElementById("new-tf-answer").value === "true";

		if (!question) {
			this.showNotification("Please enter a statement", "error");
			return;
		}

		const newQuestion = {
			id: Date.now(),
			question,
			answer,
			correctCount: 0,
			totalCount: 0,
			weight: 1,
		};

		this.studyData.trueFalse.push(newQuestion);
		this.saveData();
		this.renderTrueFalseList();

		document.getElementById("new-tf-question").value = "";
		document.getElementById("new-tf-answer").value = "true";

		this.showNotification("Statement added successfully!", "success");
	}

	renderTrueFalseList() {
		const container = document.getElementById("tf-list");
		container.innerHTML = "";

		this.studyData.trueFalse.forEach((question) => {
			const div = document.createElement("div");
			div.className = "edit-item";
			div.innerHTML = `
                <div class="edit-item-header">
                    <strong>Statement: ${question.question}</strong>
                    <button class="delete-btn" onclick="app.deleteTrueFalse(${
											question.id
										})">Delete</button>
                </div>
                <p><strong>Answer:</strong> <span style="color: ${
									question.answer ? "var(--success-green)" : "var(--error-red)"
								}; font-weight: bold;">${
				question.answer ? "TRUE" : "FALSE"
			}</span></p>
                <p><small>Correct: ${question.correctCount}/${
				question.totalCount
			}</small></p>
            `;
			container.appendChild(div);
		});
	}

	deleteTrueFalse(id) {
		if (confirm("Are you sure you want to delete this statement?")) {
			this.studyData.trueFalse = this.studyData.trueFalse.filter(
				(q) => q.id !== id
			);
			this.saveData();
			this.renderTrueFalseList();
			this.showNotification("Statement deleted", "info");
		}
	}

	resetTrueFalseProgress() {
		if (confirm("Are you sure you want to reset all true/false progress?")) {
			this.studyData.trueFalse.forEach((question) => {
				question.correctCount = 0;
				question.totalCount = 0;
				question.weight = 1;
			});
			this.saveData();
			this.updateDashboard();
			this.showNotification("True/False progress reset", "info");
		}
	}

	// Ranks functionality
	setupRanks() {
		this.renderRanks();
	}

	renderRanks() {
		const ranks = {
			enlisted: [
				{ grade: "E-1", name: "Private", rimage: "ranks/placeholder.png" },
				{
					grade: "E-2",
					name: "Private First Class",
					rimage: "ranks/private-first-class.png",
				},
				{
					grade: "E-3",
					name: "Lance Corporal",
					rimage: "ranks/lance-corporal.png",
				},
				{ grade: "E-4", name: "Corporal", rimage: "ranks/corporal.png" },
				{ grade: "E-5", name: "Sergeant", rimage: "ranks/sergeant.png" },
				{
					grade: "E-6",
					name: "Staff Sergeant",
					rimage: "ranks/staff_sergeant.png",
				},
				{
					grade: "E-7",
					name: "Gunnery Sergeant",
					rimage: "ranks/gunnery_sergeant.png",
				},
				{
					grade: "E-8",
					name: "Master Sergeant",
					rimage: "ranks/master_sergeant.png",
				},
				{
					grade: "E-8",
					name: "First Sergeant",
					rimage: "ranks/first_sergeant.png",
				},
				{
					grade: "E-9",
					name: "Master Gunnery Sergeant",
					rimage: "ranks/master_gunnery_sergeant.png",
				},
				{
					grade: "E-9",
					name: "Sergeant Major",
					rimage: "ranks/sergeant_major.png",
				},
				{
					grade: "E-9",
					name: "Sergeant Major of the Marine Corps",
					rimage: "ranks/sergeant_major_of_the_marines.png",
				},
			],
			warrant: [
				{
					grade: "WO-1",
					name: "Warrant Officer 1",
					rimage: "ranks/warrant_officer.png",
				},
				{
					grade: "CWO-2",
					name: "Chief Warrant Officer 2",
					rimage: "ranks/chief_warrant_officer_2.png",
				},
				{
					grade: "CWO-3",
					name: "Chief Warrant Officer 3",
					rimage: "ranks/chief_warrant_officer_3.png",
				},
				{
					grade: "CWO-4",
					name: "Chief Warrant Officer 4",
					rimage: "ranks/chief_warrant_officer_4.png",
				},
				{
					grade: "CWO-5",
					name: "Chief Warrant Officer 5",
					rimage: "ranks/chief_warrant_officer_5.png",
				},
			],
			officer: [
				{
					grade: "O-1",
					name: "Second Lieutenant",
					rimage: "ranks/second_lieutenant.jpg",
				},
				{
					grade: "O-2",
					name: "First Lieutenant",
					rimage: "ranks/first_lieutenant.png",
				},
				{ grade: "O-3", name: "Captain", rimage: "ranks/captain.png" },
				{ grade: "O-4", name: "Major", rimage: "ranks/major.png" },
				{
					grade: "O-5",
					name: "Lieutenant Colonel",
					rimage: "ranks/lieutenant_colonel.png",
				},
				{ grade: "O-6", name: "Colonel", rimage: "ranks/colonel.png" },
				{
					grade: "O-7",
					name: "Brigadier General",
					rimage: "ranks/brigadier_general.png",
				},
				{
					grade: "O-8",
					name: "Major General",
					rimage: "ranks/major_general.png",
				},
				{
					grade: "O-9",
					name: "Lieutenant General",
					rimage: "ranks/lieutenant_general.png",
				},
				{ grade: "O-10", name: "General", rimage: "ranks/general.png" },
			],
		};

		Object.keys(ranks).forEach((category) => {
			const container = document.getElementById(`${category}-ranks`);
			container.innerHTML = "";

			ranks[category].forEach((rank) => {
				const div = document.createElement("div");
				div.className = "rank-card";
				div.innerHTML = `
                    <div class="rank-insignia">
                        <img src="${rank.rimage}" alt="${rank.name} insignia" />
                    </div>
                    <div class="rank-name">${rank.name}</div>
                    <div class="rank-grade">${rank.grade}</div>
                `;
				container.appendChild(div);
			});
		});
	}

	// Reference functionality
	setupReference() {
		this.renderReference();
	}

	renderReference() {
		// Render Code of Conduct
		const codeContainer = document.getElementById("code-of-conduct");
		codeContainer.innerHTML = "";

		marineCorpsData.codeOfConduct.forEach((article, index) => {
			const div = document.createElement("div");
			div.className = "reference-item";
			div.innerHTML = `
                <div class="reference-item-number">ARTICLE ${index + 1}</div>
                <div class="reference-item-content">${article.replace(
									`ARTICLE ${index + 1}: `,
									""
								)}</div>
            `;
			codeContainer.appendChild(div);
		});

		// Render General Orders
		const ordersContainer = document.getElementById("general-orders");
		ordersContainer.innerHTML = "";

		marineCorpsData.generalOrders.forEach((order, index) => {
			const div = document.createElement("div");
			div.className = "reference-item";
			div.innerHTML = `
                <div class="reference-item-number">GENERAL ORDER ${
									index + 1
								}</div>
                <div class="reference-item-content">${order.replace(
									`General Order ${index + 1}: `,
									""
								)}</div>
        `;
			ordersContainer.appendChild(div);
		});

		// Render Leadership Traits
		const traitsContainer = document.getElementById("leadership-traits");
		traitsContainer.innerHTML = "";
		traitsContainer.className = "leadership-traits-grid";

		const traitIcons = [
			"⚖️",
			"🧠",
			"🤝",
			"💎",
			"⚡",
			"🎯",
			"🚀",
			"💪",
			"👑",
			"❤️",
			"🦁",
			"📚",
			"🛡️",
			"🔥",
		];

		marineCorpsData.leadershipTraits.forEach((trait, index) => {
			const div = document.createElement("div");
			div.className = "trait-item";
			div.innerHTML = `
            <div class="trait-icon">${traitIcons[index] || "⭐"}</div>
            <div class="trait-name">${trait}</div>
        `;
			traitsContainer.appendChild(div);
		});
	}

	// Notification system
	showNotification(message, type = "info") {
		const notification = document.getElementById("notification");
		notification.textContent = message;
		notification.className = `notification ${type}`;
		notification.classList.add("show");

		setTimeout(() => {
			notification.classList.remove("show");
		}, 3000);
	}
}

// Initialize the app when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
	window.app = new MarineStudyApp();
});

// Additional Marine Corps data for enhanced learning
const marineCorpsData = {
	codeOfConduct: [
		"ARTICLE 1: I am an American, fighting in the forces which guard my country and our way of life. I am prepared to give my life in their defense.",
		"ARTICLE 2: I will never surrender of my own free will. If in command, I will never surrender the members of my command while they still have the means to resist.",
		"ARTICLE 3: If I am captured I will continue to resist by all means available. I will make every effort to escape and to aid others to escape. I will accept neither parole nor special favors from the enemy.",
		"ARTICLE 4: If I become a prisoner of war, I will keep faith with my fellow prisoners. I will give no information nor take part in any action which might be harmful to my comrades. If I am senior, I will take command. If not, I will obey lawful orders of those appointed over me and will back them in every way.",
		"ARTICLE 5: When questioned, should I become a prisoner of war, I am required to give name, rank, service number, and date of birth. I will evade answering further questions to the utmost of my ability. I will make no oral or written statements disloyal to my country or its allies or harmful to their cause.",
		"ARTICLE 6: I will never forget that I am an American, fighting for freedom, responsible for my actions, and dedicated to the principles which made my country free. I will trust in my God and in the United States of America.",
	],

	generalOrders: [
		"General Order 1: To take charge of this post and all government property in view.",
		"General Order 2: To walk my post in a military manner, keeping always on the alert and observing everything that takes place within sight or hearing.",
		"General Order 3: To report all violations of orders I am instructed to enforce.",
		"General Order 4: To repeat all calls from posts more distant from the guardhouse than my own.",
		"General Order 5: To quit my post only when properly relieved.",
		"General Order 6: To receive, obey, and pass on to the sentry who relieves me, all orders from the commanding officer, officer of the day, and officers and noncommissioned officers of the guard only.",
		"General Order 7: To talk to no one except in line of duty.",
		"General Order 8: To give the alarm in case of fire or disorder.",
		"General Order 9: To call the corporal of the guard in any case not covered by instructions.",
		"General Order 10: To salute all officers and all colors and standards not cased.",
		"General Order 11: To be especially watchful at night, and during the time for challenging, to challenge all persons on or near my post and to allow no one to pass without proper authority.",
	],

	leadershipTraits: [
		"Justice",
		"Judgement",
		"Dependability",
		"Integrity",
		"Decisiveness",
		"Tact",
		"Initiative",
		"Endurance",
		"Bearing",
		"Unselfishness",
		"Courage",
		"Knowledge",
		"Loyalty",
		"Enthusiasm",
	],
};
