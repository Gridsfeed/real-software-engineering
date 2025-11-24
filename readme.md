# RSE-PoC — Real Software Engineering Benchmark (Prototype)

RSE-PoC is the minimal viable version of RSE (Real Software Engineering Benchmark).  
It implements the basic core pipeline of RSE:

**Task → Execution → Evaluation → Result**

This PoC does not use real models; instead, it simulates Agent behavior through `mock.ts` to verify if the system structure is correct, extensible, and replaceable.

---

## 📦 Project Structure (PoC)

src/
├── index.ts # Orchestrator
├── lib/
│ ├── task.ts # Task Definition (Task Layer)
│ ├── exec.ts # Executor (Execution Layer)
│ ├── eval.ts # Scorer (Evaluation Layer)
│ ├── types.ts # Type Protocols (Task/Artifacts/Scoring)
│ └── logger.ts # Unified Logging System
└── test/
└── mock.ts # Mock Model (Mock Agent)

---

## 🧠 Core Design Philosophy

### 1. **Task Layer**
Uniformly describes a standard task.  
In the PoC, it only includes the simplest XS task (single-page HTML generation).

### 2. **Execution Layer**
Simulates:  
> "Model receives task → Generates code → Forms artifacts → Records logs"

In the PoC, exec hands the task to `mock.ts` for processing.

### 3. **Evaluation Layer**
Automatically scores the task based on artifacts.  
The PoC includes three minimal metrics:

- Completeness (Artifact completeness)
- Structure (HTML structure correctness)
- Survivability (Whether the task executed successfully)

---

## 🚀 Entry Point

The running process is orchestrated by `index.ts`:

1. Load task (task.ts)
2. Execute task (exec.ts + mock.ts)
3. Automatic scoring (eval.ts)
4. Output results (console + JSON)

---

## 🛠️ Extension Plan (RSE → Full Version)

After PoC completion, extensible directions:

- Multi-task: XS / L / M / H four difficulty levels
- Multi-model baseline: GPT / Claude / Qwen / Llama / DeepSeek / Grok
- Automatic HTML report generation
- Automatic deployment simulation
- Real LLM integration (model adapter)
- Five-dimensional scoring system (F/E/R/P/S)
- Replay & Reproduce system
- CLI toolchain (`rse-run`, `rse-eval`, `rse-bench`)

This is an **architecture that can be directly upgraded to full RSE-Core**.

---

## 📜 License

MIT
