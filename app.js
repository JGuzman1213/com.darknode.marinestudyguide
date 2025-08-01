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
					question: "Who is the most decorated Marine?",
					answer: "Lieutenant General Lewis 'Chesty' Puller",
					correctCount: 0,
					totalCount: 0,
					weight: 1,
				},
				{
					id: 4,
					question: "What does EGA stand for?",
					answer:
						"Eagle, Globe, and Anchor - the Marine Corps emblem representing the Corps' commitment to defend the nation on land, sea, and air",
					correctCount: 0,
					totalCount: 0,
					weight: 1,
				},
				{
					id: 5,
					question: "Who was the first female Marine?",
					answer: "Opha May Johnson, enlisted on August 13, 1918",
					correctCount: 0,
					totalCount: 0,
					weight: 1,
				},
				{
					id: 6,
					question: "When and where was the Marine Corps born?",
					answer:
						"November 10, 1775, at Tun Tavern in Philadelphia, Pennsylvania",
					correctCount: 0,
					totalCount: 0,
					weight: 1,
				},
				{
					id: 7,
					question: "List all 14 Marine Corps Leadership Traits",
					answer:
						"Justice, Judgement, Dependability, Integrity, Decisiveness, Tact, Initiative, Endurance, Bearing, Unselfishness, Courage, Knowledge, Loyalty, Enthusiasm",
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
			}, 150);
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
