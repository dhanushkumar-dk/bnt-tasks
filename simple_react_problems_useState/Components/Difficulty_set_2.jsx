import { useState, useEffect } from "react";

export function CharacterCounter() {
  const [text, setText] = useState("");

  return (
    <div>
      <h2>Character Counter</h2>
      <textarea
        maxLength={100}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p>{text.length}/100 characters</p>
      <hr />
    </div>
  );
}

export function TodoApp() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const addTask = () => {
    if (task.trim()) {
      setTodos([...todos, task]);
      setTask("");
    }
  };

  const deleteTask = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h2>Todo App</h2>
      <input value={task} onChange={(e) => setTask(e.target.value)} />
      <button onClick={addTask}>Add</button>
      <ul>
        {todos.map((item, idx) => (
          <li key={idx}>
            {item}
            <button onClick={() => deleteTask(idx)}>❌</button>
          </li>
        ))}
      </ul>
      <hr />
    </div>
  );
}

export function TemperatureConverter() {
  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");

  const handleCelsius = (e) => {
    const val = e.target.value;
    setCelsius(val);
    setFahrenheit(val ? ((val * 9) / 5 + 32).toFixed(2) : "");
  };

  const handleFahrenheit = (e) => {
    const val = e.target.value;
    setFahrenheit(val);
    setCelsius(val ? (((val - 32) * 5) / 9).toFixed(2) : "");
  };

  return (
    <div>
      <h2>Temperature Converter</h2>
      <input placeholder="Celsius" value={celsius} onChange={handleCelsius} />
      <input
        placeholder="Fahrenheit"
        value={fahrenheit}
        onChange={handleFahrenheit}
      />
      <hr />
    </div>
  );
}

export function TabsComponent() {
  const [activeTab, setActiveTab] = useState("Home");

  const content = {
    Home: "Welcome to the Home tab.",
    About: "This is the About section.",
    Contact: "Reach us at contact@example.com.",
  };

  return (
    <div>
      <h2>Tabs</h2>
      {Object.keys(content).map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          style={{ fontWeight: activeTab === tab ? "bold" : "normal" }}
        >
          {tab}
        </button>
      ))}
      <p>{content[activeTab]}</p>
      <hr />
    </div>
  );
}

export function AccordionFAQ() {
  const faqs = [
    { question: "What is React?", answer: "A JS library for building UIs." },
    { question: "What is useState?", answer: "A React hook for state." },
    { question: "What is JSX?", answer: "JSX lets you write HTML in JS." },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div>
      <h2>FAQ Accordion</h2>

      {faqs.map((faq, i) => (
        <div key={i}>
          <h4
            onClick={() => setOpenIndex(i === openIndex ? null : i)}
            style={{ cursor: "pointer" }}
          >
            {faq.question}
          </h4>
          {openIndex === i && <p>{faq.answer}</p>}
        </div>
      ))}
      <hr />
    </div>
  );
}

export function Stopwatch() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (running) {
      timer = setInterval(() => setTime((t) => t + 1), 1000);
    }
    return () => clearInterval(timer);
  }, [running]);

  return (
    <div>
      <h2>Stopwatch</h2>
      <p>{time} sec</p>
      <button onClick={() => setRunning(true)}>Start</button>
      <button onClick={() => setRunning(false)}>Pause</button>
      <button
        onClick={() => {
          setTime(0);
          setRunning(false);
        }}
      >
        Reset
      </button>
      <hr />
    </div>
  );
}

export function ImageSlider() {
  const images = [
    "https://via.placeholder.com/200x100?text=1",
    "https://via.placeholder.com/200x100?text=2",
    "https://via.placeholder.com/200x100?text=3",
  ];
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % images.length);
  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);

  return (
    <div>
      <h2>Image Slider</h2>
      <img src={images[index]} alt="slide" />
      <br />
      <button onClick={prev}>Prev</button>
      <button onClick={next}>Next</button>
      <hr />
    </div>
  );
}

export function SearchFilterList() {
  const items = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];
  const [search, setSearch] = useState("");

  const filtered = items.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h2>Search Filter</h2>
      <input value={search} onChange={(e) => setSearch(e.target.value)} />
      <ul>
        {filtered.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <hr />
    </div>
  );
}

export function FormLivePreview() {
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");

  return (
    <div>
      <h2>Form with Live Preview</h2>
      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <textarea
        placeholder="Bio"
        value={bio}
        onChange={(e) => setBio(e.target.value)}
      />
      <h4>Live Preview</h4>
      <p>
        <strong>{name}</strong>
      </p>
      <p>{bio}</p>
      <hr />
    </div>
  );
}

export function PersistentThemeToggle() {
  const [dark, setDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  const style = {
    backgroundColor: dark ? "#111" : "#eee",
    color: dark ? "#fff" : "#000",
    padding: "20px",
  };

  return (
    <div style={style}>
      <h2>Persistent Theme</h2>
      <button onClick={() => setDark((d) => !d)}>
        Toggle to {dark ? "Light" : "Dark"} Mode
      </button>
      <hr />
    </div>
  );
}
