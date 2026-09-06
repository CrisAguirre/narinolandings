import React, { useState, useEffect } from 'react';
import { getRandomQuestions } from '../data/questionsBank';

export default function EvaluationTab() {
  const [step, setStep] = useState(1); // 1: Form, 2: Quiz, 3: Results
  
  // Student Info
  const [studentInfo, setStudentInfo] = useState({
    name: '',
    grade: '',
    institution: ''
  });

  // Quiz State
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({}); // { questionId: [selected option indices] }
  const [score, setScore] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  useEffect(() => {
    // Load 10 random questions when the component mounts
    setQuestions(getRandomQuestions(10));
  }, []);

  const handleInfoChange = (e) => {
    setStudentInfo({ ...studentInfo, [e.target.name]: e.target.value });
  };


  const startQuiz = (e) => {
    e.preventDefault();
    if (studentInfo.name && studentInfo.grade && studentInfo.institution) {
      setStep(2);
    }
  };

  const handleOptionChange = (qIndex, optionIndex, isMulti) => {
    const currentSelected = answers[qIndex] || [];
    let newSelected;
    
    if (isMulti) {
      // Toggle selection for multiple choice
      if (currentSelected.includes(optionIndex)) {
        newSelected = currentSelected.filter(idx => idx !== optionIndex);
      } else {
        if (currentSelected.length < 2) {
          newSelected = [...currentSelected, optionIndex];
        } else {
          // If already 2 selected, ignore or replace first
          newSelected = [currentSelected[1], optionIndex];
        }
      }
    } else {
      // Single selection
      newSelected = [optionIndex];
    }
    
    setAnswers({ ...answers, [qIndex]: newSelected });
  };

  const calculateScore = () => {
    let currentScore = 0;
    questions.forEach((q, index) => {
      const selected = answers[index] || [];
      const correct = q.correct;
      
      // For a question to be correct, they must have selected all correct options and no incorrect ones.
      if (selected.length === correct.length && selected.every(val => correct.includes(val))) {
        currentScore += 1;
      }
    });
    return currentScore;
  };

  const submitQuiz = async () => {
    const finalScore = calculateScore();
    setScore(finalScore);
    setIsSubmitting(true);
    setStep(3);

    // Prepare data for FormSubmit
    const formData = new FormData();
    formData.append("Nombre del Estudiante", studentInfo.name);
    formData.append("Grado", studentInfo.grade);
    formData.append("Institución", studentInfo.institution);
    formData.append("Puntaje Obtenido", `${finalScore} / 10`);
    
    // Optional: Include detailed answers
    let details = "";
    questions.forEach((q, idx) => {
      const selectedIndices = answers[idx] || [];
      const selectedTexts = selectedIndices.map(i => q.options[i]).join(", ");
      details += `P${idx + 1}: ${q.text} \nRespuesta dada: ${selectedTexts || 'Ninguna'} \n\n`;
    });
    formData.append("Detalles de Respuestas", details);
    
    // Prevent captcha redirect if possible, and set a custom subject
    formData.append("_captcha", "false");
    formData.append("_subject", `Nueva Evaluación Nariño - ${studentInfo.name} (${finalScore}/10)`);
    formData.append("_template", "table");

    try {
      const response = await fetch("https://formsubmit.co/ajax/crisaguirredev@gmail.com", {
        method: "POST",
        body: formData
      });
      
      if (!response.ok) throw new Error("Network response was not ok");
      setIsSubmitting(false);
    } catch (error) {
      console.error("Error submitting form", error);
      setIsSubmitting(false);
      setSubmitError(true);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto mt-4 mb-12 p-6 glass-panel text-slate-100">
      <div className="flex items-center gap-3 mb-6 border-b border-slate-700/50 pb-4">
        <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path></svg>
        </div>
        <h2 className="text-2xl font-bold text-white">Módulo de Evaluación: Conoce Nariño</h2>
      </div>

      {step === 1 && (
        <div className="animate-fade-in">
          <p className="text-slate-300 mb-6">Por favor, ingresa tus datos para comenzar la prueba. Consta de 10 preguntas de selección múltiple sobre geografía e historia de Nariño. Algunas preguntas tienen 2 opciones correctas.</p>
          
          <form onSubmit={startQuiz} className="space-y-4 max-w-md mx-auto bg-slate-800/50 p-6 rounded-xl border border-slate-700/50">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1">Nombre Completo</label>
              <input 
                required
                type="text" 
                name="name"
                value={studentInfo.name}
                onChange={handleInfoChange}
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-indigo-500 transition-colors"
                placeholder="Ej. María Pérez"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1">Grado (Primaria - 7mo Bachillerato)</label>
              <select 
                required
                name="grade"
                value={studentInfo.grade}
                onChange={handleInfoChange}
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-indigo-500 transition-colors"
              >
                <option value="">Selecciona tu grado...</option>
                <option value="1ro Primaria">1ro Primaria</option>
                <option value="2do Primaria">2do Primaria</option>
                <option value="3ro Primaria">3ro Primaria</option>
                <option value="4to Primaria">4to Primaria</option>
                <option value="5to Primaria">5to Primaria</option>
                <option value="6to Bachillerato">6to Bachillerato</option>
                <option value="7mo Bachillerato">7mo Bachillerato</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1">Institución Educativa</label>
              <input 
                required
                type="text" 
                name="institution"
                value={studentInfo.institution}
                onChange={handleInfoChange}
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-indigo-500 transition-colors"
                placeholder="Ej. I.E. San Juan Bosco"
              />
            </div>
            <div className="pt-4">
              <button 
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2.5 px-4 rounded-lg shadow-lg hover:shadow-indigo-500/30 transition-all"
              >
                Comenzar Evaluación
              </button>

            </div>
          </form>
        </div>
      )}

      {step === 2 && (
        <div className="animate-fade-in space-y-8">
          <div className="bg-indigo-500/10 border border-indigo-500/20 text-indigo-200 p-4 rounded-lg flex items-start gap-3">
            <svg className="w-5 h-5 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <p className="text-sm">Lee atentamente cada pregunta. Presta atención si te pide seleccionar <strong>DOS</strong> opciones en lugar de una.</p>
          </div>

          {questions.map((q, index) => {
            const isMulti = q.correct.length > 1;
            return (
              <div key={index} className="bg-slate-800/40 p-5 rounded-xl border border-slate-700/50 shadow-inner">
                <h3 className="text-lg font-medium text-white mb-4">
                  <span className="text-indigo-400 mr-2">{index + 1}.</span> 
                  {q.text}
                </h3>
                <div className="space-y-2 pl-6">
                  {q.options.map((opt, oIndex) => {
                    const isChecked = (answers[index] || []).includes(oIndex);
                    return (
                      <label key={oIndex} className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-colors ${isChecked ? 'bg-indigo-500/20 border border-indigo-500/50' : 'hover:bg-slate-700/50 border border-transparent'}`}>
                        <div className={`w-5 h-5 flex items-center justify-center shrink-0 border transition-colors ${isMulti ? 'rounded' : 'rounded-full'} ${isChecked ? 'bg-indigo-500 border-indigo-500' : 'border-slate-500'}`}>
                          {isChecked && <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path></svg>}
                        </div>
                        <input 
                          type="checkbox" 
                          className="hidden" 
                          checked={isChecked}
                          onChange={() => handleOptionChange(index, oIndex, isMulti)}
                        />
                        <span className="text-slate-200">{opt}</span>
                      </label>
                    );
                  })}
                </div>
              </div>
            );
          })}

          <div className="flex justify-end pt-6 border-t border-slate-700/50">
            <button 
              onClick={submitQuiz}
              disabled={Object.keys(answers).length < 10}
              className={`font-bold py-3 px-8 rounded-lg shadow-lg transition-all ${
                Object.keys(answers).length < 10 
                ? 'bg-slate-700 text-slate-400 cursor-not-allowed' 
                : 'bg-emerald-600 hover:bg-emerald-500 text-white hover:shadow-emerald-500/30'
              }`}
            >
              Terminar y Enviar Resultados
            </button>
          </div>
          {Object.keys(answers).length < 10 && (
            <p className="text-right text-amber-400 text-sm mt-2">Debes responder todas las preguntas para enviar.</p>
          )}
        </div>
      )}

      {step === 3 && (
        <div className="animate-fade-in text-center py-10">
          <div className="w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6 shadow-xl border-4 border-slate-800 bg-slate-800">
            {isSubmitting ? (
              <svg className="w-10 h-10 text-indigo-400 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            ) : score >= 6 ? (
              <svg className="w-10 h-10 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path></svg>
            ) : (
              <svg className="w-10 h-10 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
            )}
          </div>
          
          <h3 className="text-3xl font-bold text-white mb-2">¡Evaluación Completada!</h3>
          <p className="text-lg text-slate-300 mb-8">{studentInfo.name}, has obtenido un puntaje de:</p>
          
          <div className="inline-block px-8 py-4 bg-slate-900 rounded-2xl border border-slate-700 shadow-inner mb-8">
            <span className={`text-5xl font-black ${score >= 6 ? 'text-emerald-400' : 'text-amber-400'}`}>{score}</span>
            <span className="text-2xl text-slate-500 font-bold mx-2">/</span>
            <span className="text-2xl text-slate-400 font-bold">10</span>
          </div>

          <div className="max-w-md mx-auto">
            {isSubmitting ? (
              <p className="text-indigo-300">Enviando resultados al profesor...</p>
            ) : submitError ? (
              <div className="bg-red-500/10 border border-red-500/30 text-red-300 p-4 rounded-lg">
                <p>Hubo un error al enviar los resultados automáticamente. Por favor, toma una captura de pantalla de esta página y muéstrasela a tu profesor.</p>
              </div>
            ) : (
              <div className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 p-4 rounded-lg">
                <p>¡Tus resultados han sido enviados exitosamente al correo de tu profesor!</p>
                <p className="text-xs mt-2 opacity-70">Nota: Al ser el primer envío, el profesor puede necesitar confirmar la recepción en su bandeja de entrada (formsubmit.co).</p>
              </div>
            )}
          </div>

          {!isSubmitting && (
            <button 
              onClick={() => window.location.reload()}
              className="mt-8 text-indigo-400 hover:text-indigo-300 underline underline-offset-4 font-medium transition-colors"
            >
              Volver al inicio
            </button>
          )}
        </div>
      )}
    </div>
  );
}
