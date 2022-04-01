import Marriage from '@assets/images/arranged.jpeg';
import Together from '@assets/images/gettogether.png';
import Reception from '@assets/images/wedReception.jpeg';
import React from 'react';

export const stories = [
  {
    title: 'Get together',
    date: '23 April 2022',
    description:
      'We have an informal gathering and some events on Saturday. Dinner will start post 7:30 pm.',
    image: Together,
    map: <iframe title="hi"
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3882.1874789500757!2d74.73475571482592!3d13.338611090615892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbcbb7708e8b0c9%3A0x1cbe072fc357c9a6!2sShamili!5e0!3m2!1sen!2sin!4v1648792452019!5m2!1sen!2sin"
                 style={{border:0, height:'100px', width:'100%'}} allowFullScreen="" loading="lazy"
                 referrerPolicy="no-referrer-when-downgrade"/>
  },
  {
    title: 'The wedding',
    date: '24 April 2022',
    description:
      'Muhurtham for the wedding is at 11:20 am. We have the wedding formalities starting early 9 am. Breakfast will be available from 8 am to 10 am. Lunch post 12 pm. We do not have any dress code. Please feel free to wear anything you like. ',
    image: Marriage,
    map: <iframe title="hi"
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3882.1874789500757!2d74.73475571482592!3d13.338611090615892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbcbb7708e8b0c9%3A0x1cbe072fc357c9a6!2sShamili!5e0!3m2!1sen!2sin!4v1648792452019!5m2!1sen!2sin"
                 style={{border:0, height:'100px', width:'100%'}} allowFullScreen="" loading="lazy"
                 referrerPolicy="no-referrer-when-downgrade"/>
  },
  {
    title: 'The wedding reception',
    date: '1st May 2022',
    description:
      'The wedding reception will be a party hosted in Gokulam park, Kochi. We have a music event, lots of photography and dinner will be served from 6:30PM',
    image: Reception,
    map: <iframe title='getTogether'
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.268295528678!2d76.28772991548117!3d9.994682675866402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d41b9b18193%3A0x129b8d73e4c31739!2sGokulam%20Park%20Hotel%20Kochi!5e0!3m2!1sen!2sin!4v1648798832481!5m2!1sen!2sin"
                 style={{border:0, height:'100px', width:'100%'}} allowFullScreen="" loading="lazy"
                 referrerPolicy="no-referrer-when-downgrade"/>
  }
];
