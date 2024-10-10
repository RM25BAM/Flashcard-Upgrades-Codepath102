import { useState } from 'react';
import './App.css';
import Card from './components/Card';
import { AnimatedBackground } from 'animated-backgrounds';


const isAnswerCorrect = (guess, correctAnswer) => {

  const formattedGuess = guess.trim().toLowerCase();
  const formattedAnswer = correctAnswer.trim().toLowerCase();
  

  return formattedAnswer.includes(formattedGuess);
};

function App() {
  const [index, setIndex] = useState(0);
  const [revealAnswer, setRevealAnswer] = useState(false);
  const [guess, setGuess] = useState('');
  const [isCorrect, setIsCorrect] = useState(null);
  const [history, setHistory] = useState([]);  
  const [currentStreak, setCurrentStreak] = useState(0); 
  const [longestStreak, setLongestStreak] = useState(0);  
  const [masteredCards, setMasteredCards] = useState([]); 
  const [prompts, setPrompts] = useState([
    { question: "What is computational neuroscience?", answer: "Computational neuroscience is the study of brain function through the development and application of mathematical models, theoretical analysis, and computer simulations.", imageUrl: "https://d2z0k1elb7rxgj.cloudfront.net/uploads/2019/07/computational-neuroscience-diagram-2.png" },
    { question: "What is a neuron model in computational neuroscience?", answer: "A neuron model simulates the electrical activity of neurons, the basic building blocks of the brain, and includes models like the Hodgkin-Huxley or integrate-and-fire models.", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Blausen_0657_MultipolarNeuron.png/800px-Blausen_0657_MultipolarNeuron.png" },
    { question: " What is the Hodgkin-Huxley model?", answer: "The Hodgkin-Huxley model describes how action potentials in neurons are initiated and propagated by modeling ion channels and their dynamics using differential equations.", imageUrl: "https://www.researchgate.net/publication/343552664/figure/fig3/AS:1022318641954817@1620751166120/Hodgkin-Huxley-model-of-biological-neurons-that-describes-in-detail-the.png" },
    { question: "What is a spike train in computational neuroscience?", answer: "A spike train is a sequence of action potentials (spikes) fired by a neuron over time, typically represented as a binary sequence of firing (1) or not firing (0) at each time step.", imageUrl: "https://www.researchgate.net/publication/235702794/figure/fig1/AS:669051147808779@1536525632576/Spike-train-observation-Typical-intracellular-membrane-potential-recording-from-a-neuron.png" },
    { question: "What is synaptic plasticity?", answer: "Synaptic plasticity refers to the ability of synapses, the connections between neurons, to strengthen or weaken over time, based on the frequency and intensity of their activity, as seen in long-term potentiation (LTP) and long-term depression (LTD).", imageUrl: "https://media.springernature.com/m685/springer-static/image/art%3A10.1038%2Fsj.npp.1301559/MediaObjects/41386_2008_Article_BF1301559_Fig1_HTML.jpg" },
    { question: "What is the purpose of the integrate-and-fire neuron model?", answer: "The integrate-and-fire model simplifies neuronal behavior by accumulating input signals until a threshold is reached, at which point the neuron 'fires' and resets.", imageUrl: "https://lcnwww.epfl.ch/gerstner/SPNM/img378.gif" },
    { question: "What is a receptive field in computational neuroscience?", answer: "A receptive field refers to the specific region of sensory space (e.g., visual or auditory) where stimuli can elicit a response from a neuron or a neural network.", imageUrl: "https://theaisummer.com/static/ab62e5bb8de79d33ab49cec298230c46/86389/Visual-human-system.png" },
    { question: "How is machine learning related to computational neuroscience?", answer: "Machine learning techniques are used to model how neural circuits process information and make predictions about brain function, as well as to analyze neural data and decode brain activity.", imageUrl: "https://media.springernature.com/full/springer-static/image/art%3A10.1038%2Fs41593-019-0520-2/MediaObjects/41593_2019_520_Fig1_HTML.png" },
    { question: "What is a neural network in computational neuroscience?", answer: " A neural network is a computational model inspired by the structure and function of the brain, consisting of layers of artificial neurons that process information in ways similar to biological neural networks.", imageUrl: "https://media.springernature.com/full/springer-static/image/art%3A10.1038%2Fs41583-021-00473-5/MediaObjects/41583_2021_473_Fig1_HTML.png" },
    { question: "What is a connectome?", answer: "A connectome is a comprehensive map of neural connections in the brain, often referred to as the 'wiring diagram' that shows how neurons and neural networks are interconnected.", imageUrl: "https://www.snexplores.org/wp-content/uploads/2023/06/1440_SS_connectome_feat.jpg" },
  ]);
 
   const handleGuessChange = (event) => {
    setGuess(event.target.value);
  };

 
  const checkAnswer = () => {
    const isCorrectGuess = isAnswerCorrect(guess, prompts[index].answer);

    if (isCorrectGuess) {
      setIsCorrect(true);
      setCurrentStreak(currentStreak + 1); 
      if (currentStreak + 1 > longestStreak) {
        setLongestStreak(currentStreak + 1);  
      }
    } else {
      setIsCorrect(false);
      setCurrentStreak(0);  
    }
    setRevealAnswer(true);
  };

 
  const reset = () => {
    setGuess('');
    setIsCorrect(null);
    setRevealAnswer(false);
  };

  
  const generateRandomIndex = () => {
    setHistory([...history, index]);  
    setIndex(Math.floor(Math.random() * prompts.length));
    reset();
  };


  const shuffleCards = () => {
    const shuffled = [...prompts].sort(() => Math.random() - 0.5);
    setPrompts(shuffled);
    reset();
  };

 
  const selectPreviousIndex = () => {
    if (history.length > 0) {
      const prevIndex = history[history.length - 1]; 
      setHistory(history.slice(0, -1));  
      setIndex(prevIndex);  
      reset();
    }
  };

 
  const markCardAsMastered = () => {
    const masteredCard = prompts[index];
    setMasteredCards([...masteredCards, masteredCard]);
    const remainingPrompts = prompts.filter((_, i) => i !== index);  
    setPrompts(remainingPrompts);
    reset();
    generateRandomIndex();
  };
  return (
    <div className="body">
      <AnimatedBackground animationName="galaxySpiral" />
      <h1 style={{ color: '#fff' }}>Coding Neuroscience</h1>
      <h3 style={{ color: '#fff' }}>Test your knowledge with this set of 10 flashcards covering neuroscience vocabulary</h3>
      <div className="streaks">
        <p style={{ color: '#fff' }}>Current Streak: {currentStreak}</p>
        <p style={{ color: '#fff' }}>Longest Streak: {longestStreak}</p>
      </div>
      <div className="card_main">
        {prompts.length > 0 ? (
          <>
            <Card
              answer={prompts[index].answer}
              question={prompts[index].question}
              imageUrl={prompts[index].imageUrl}
              revealAnswer={revealAnswer}
            />
            
            {!revealAnswer && (
              <div className="input-section">
                <input
                  type="text"
                  value={guess}
                  onChange={handleGuessChange}
                  placeholder="Type your guess!"
                />
                <button className="button" onClick={checkAnswer}>Submit</button>
              </div>
            )}

            {revealAnswer && isCorrect !== null && (
              <p className={`feedback ${isCorrect ? 'correct' : 'incorrect'}`}>
                {isCorrect ? 'Correct!' : 'Incorrect. Try the next one!'}
              </p>
            )}
            
            <button className='button' onClick={selectPreviousIndex}>&#8592; Previous</button>
            <button className='button' onClick={generateRandomIndex}>&#8594; Next</button>
            <button className='button' onClick={shuffleCards}>Shuffle</button>
            <button className='button' onClick={markCardAsMastered}>Mastered</button>
          </>
        ) : (
          <p style={{ color: '#fff' }}>You have mastered all the cards!</p>
        )}
      </div>

      {masteredCards.length > 0 && (
        <div className="mastered-section">
          <h3 style={{ color: '#fff' }}>Mastered Cards</h3>
          <ul>
            {masteredCards.map((card, i) => (
              <li key={i} style={{ color: '#fff' }}>{card.question}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;