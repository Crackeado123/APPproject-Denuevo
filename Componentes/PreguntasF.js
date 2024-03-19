import React, { useState } from 'react';
import { View, Text,ImageBackground, ScrollView, TouchableOpacity, LayoutAnimation } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { preguntasFstyles } from './Estilos';


const FAQItem = ({ question, answer }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded(!expanded);
  };

  return (
    <View style={preguntasFstyles.faqItem}>
      <TouchableOpacity onPress={toggleExpand} style={preguntasFstyles.header}>
        <Text style={preguntasFstyles.question}>{question}</Text>
        <FontAwesome name={expanded ? 'chevron-up' : 'chevron-down'} size={20} color='#333' />
      </TouchableOpacity>
      {expanded && <Text style={preguntasFstyles.answer}>{answer}</Text>}
    </View>
  );
};

const FAQ = () => {
  const faqData = [
    {
      question: '¿Cómo creo una cuenta?',
      answer: 'Puedes crear una cuenta haciendo clic en el botón "Registrarse" y siguiendo los pasos proporcionados.',
    },
    {
      question: '¿Cómo restablezco mi contraseña?',
      answer: 'Ve a la pantalla de inicio de sesión y haz clic en "Olvidé mi contraseña". Sigue las instrucciones para restablecerla.',
    },
    {
      question: '¿Cómo contacto con soporte?',
      answer: 'Puedes contactar con nuestro equipo de soporte enviando un correo electrónico a support@example.com.',
    },
  ];

  return (
    <ImageBackground
    source={require('./img/UnFondo.jpg')}
    style={preguntasFstyles.backgroundImage}
  >
    <ScrollView style={preguntasFstyles.container}>
      <Text style={preguntasFstyles.title}>Preguntas Frecuentes</Text>
      {faqData.map((item, index) => (
        <FAQItem key={index} question={item.question} answer={item.answer} />
      ))}
    </ScrollView>
    </ImageBackground>

  );
};

export default FAQ;
