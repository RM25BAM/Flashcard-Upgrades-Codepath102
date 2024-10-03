import { useEffect, useState } from 'react'
import Card from './components/card'
import './App.css';
import { AnimatedBackground } from 'animated-backgrounds';

function App() {
  const [index, setIndex] = useState(0);
  const [revealAnswer, setRevealAnswer] = useState(false);

  const toggleReveal = () => {
    setRevealAnswer(!revealAnswer);
  };

  const prompts = [
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
  ];

  const [lastIndex, setLastIndex] = useState(0);
  const generateRandomIndex = () => {
    setLastIndex(index);
    setIndex(Math.floor(Math.random() * prompts.length));
  };

  const selectPreviousIndex = () => {
    setIndex(lastIndex);
  };

  useEffect(() => {
    setRevealAnswer(false);
  }, [index]);

  return (
    <>
      <div className="body">
        <AnimatedBackground animationName="auroraBorealis" />
        <h1 style={{ color: '#ffff' }}>Coding Neuroscience</h1>
        <h3 style={{ color: '#ffff' }}>"Test your knowledge with this set of 10 flashcards covering cs nueroscience vocabulary"</h3>
        <div className="card_main">
          <Card
            answer={prompts[index].answer}
            question={prompts[index].question}
            imageUrl={prompts[index].imageUrl}
            revealAnswer={revealAnswer}
            handleReveal={toggleReveal}
          />
        </div>
        <button className='button' onClick={selectPreviousIndex}>&#8592;</button>
        <button className='button' onClick={generateRandomIndex}>&#8594;</button>
      </div>
    </>
  );
}

export default App;
