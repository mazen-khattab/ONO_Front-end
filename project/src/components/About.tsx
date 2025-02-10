import React from 'react';
import { Brain, Heart, Users, Sparkles } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">About ONO</h2>
          <p className="text-xl text-gray-600">Inspiring Young Minds Through Play</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              At ONO, we believe that every child deserves the opportunity to develop their full potential. 
              Our carefully curated collection of puzzles and intelligent toys is designed to nurture young 
              minds while making learning an exciting adventure. We're not just selling toys; we're investing 
              in the future by providing tools that enhance cognitive development through play.
            </p>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80" 
              alt="Children playing with puzzles" 
              className="rounded-lg shadow-lg w-full h-64 object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <Brain className="w-12 h-12 text-red-600 mx-auto mb-4" />
            <h4 className="text-xl font-semibold mb-2">Cognitive Development</h4>
            <p className="text-gray-600">Enhances problem-solving skills and logical thinking</p>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <Heart className="w-12 h-12 text-red-600 mx-auto mb-4" />
            <h4 className="text-xl font-semibold mb-2">Emotional Growth</h4>
            <p className="text-gray-600">Builds confidence and patience through achievement</p>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <Users className="w-12 h-12 text-red-600 mx-auto mb-4" />
            <h4 className="text-xl font-semibold mb-2">Social Skills</h4>
            <p className="text-gray-600">Encourages collaboration and sharing experiences</p>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <Sparkles className="w-12 h-12 text-red-600 mx-auto mb-4" />
            <h4 className="text-xl font-semibold mb-2">Creativity</h4>
            <p className="text-gray-600">Stimulates imagination and innovative thinking</p>
          </div>
        </div>

        <div className="bg-red-50 p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-4 text-center">Why Puzzles Matter</h3>
          <div className="space-y-4 text-gray-600">
            <p>
              Research has shown that children who regularly engage with puzzles and problem-solving toys 
              demonstrate improved spatial awareness, better memory retention, and enhanced critical thinking 
              abilities. These skills are crucial for success in mathematics, science, and other academic areas.
            </p>
            <p>
              Beyond academic benefits, our puzzles help children develop essential life skills such as 
              perseverance, attention to detail, and the ability to break complex problems into manageable 
              steps. These are valuable traits that will serve them well throughout their lives.
            </p>
            <p>
              At ONO, we carefully select each puzzle to ensure it provides the right balance of challenge 
              and achievement, making learning both fun and rewarding. We believe that every solved puzzle 
              is a step toward building a brighter, more capable future for your child.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;