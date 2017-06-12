import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('contacts', function() {
    this.route('new');
    this.route('show', { path: '/:id' });
    this.route('edit', { path: '/:id/edit' });
  });
  this.route('members-area');
  this.route('donnees-personnelles');
  this.route('demos');
  this.route('live');
  this.route('mind');
  this.route('getAttitude');
  this.route('getAttitudeResults',  {path: '/getAttitudeResults/:text'});
  this.route('getTweetsSent');
  this.route('getSent');
  this.route('getWordCount');
  this.route('getWordCountResults',  {path: '/getWordCountResults/:url'});
  this.route('watsonConcept');
  this.route('getwatsonConceptResults',  {path: '/getwatsonConceptResults/:url'});
  this.route('getTweets');
  this.route('getTweetsResult',  {path: '/getTweetsResult/:keyword'});
  this.route('getTweetsSentResult',  {path: '/getTweetsSentResult/:clavier'});
  this.route('getSentResults',  {path: '/getSentResults/:sent'});
  this.route('word-count-po-f.js');
  this.route('getwatson-concept-results');
  this.route('scrapyresults', {path: '/scrapyresults/:scrapy'});
  this.route('kontact');
  this.route('home');
  this.route('about-founders');
  this.route('jobs');
  this.route('google');
  this.route('francais');
  this.route('anglais');
  this.route('signup');
});

export default Router;
