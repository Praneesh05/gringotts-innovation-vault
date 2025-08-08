import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, Scroll, Trophy, Mail, Phone } from 'lucide-react';
import { LoadingScreen } from '@/components/LoadingScreen';
import { ScrollContainer } from '@/components/ScrollContainer';
import { RegistrationButton } from '@/components/RegistrationButton';
import { InteractiveBook } from '@/components/InteractiveBook';
import { MagicalCard } from '@/components/MagicalCard';
import gringottsLogo from '@/assets/gringotts-logo.jpg';

const Index = () => {
  const [showLoading, setShowLoading] = useState(true);
  const [hasVisited, setHasVisited] = useState(false);

  useEffect(() => {
    const visited = sessionStorage.getItem('hasVisitedGringotts');
    if (visited) {
      setHasVisited(true);
      setShowLoading(false);
    }
  }, []);

  const handleLoadingComplete = () => {
    sessionStorage.setItem('hasVisitedGringotts', 'true');
    setShowLoading(false);
  };

  // Event rounds data for interactive books
  const unlockVaultsPages = [
    {
      title: "Round Overview",
      content: `Welcome to "Unlock the Vaults" - the first challenge in your magical journey.
      
      This round tests your ability to think creatively and solve complex problems under pressure.
      
      Teams will face a series of enchanted puzzles that require both logical thinking and innovative approaches.`
    },
    {
      title: "Challenge Format",
      content: `• Duration: 2 hours of intensive problem-solving
      • Team Size: 3-4 magical minds working together
      • Venue: The Grand Hall of Mysteries
      • Equipment: All magical tools provided
      
      Prepare to unlock secrets that have been hidden for centuries!`
    },
    {
      title: "Judging Criteria",
      content: `Your performance will be evaluated on:
      
      🎯 Innovation & Creativity (30%)
      🧠 Problem-Solving Approach (25%)
      ⚡ Speed & Efficiency (20%)
      🤝 Team Collaboration (15%)
      🎭 Presentation Style (10%)
      
      Remember: The most magical solutions often come from thinking outside the vault!`
    }
  ];

  const vaultVisionPages = [
    {
      title: "Vision Quest",
      content: `"Vault of Vision" - Where your magical innovations come to life!
      
      Present your breakthrough ideas that could revolutionize the wizarding world.
      
      This is your chance to demonstrate how your magical innovations can solve real-world challenges.`
    },
    {
      title: "Presentation Guidelines",
      content: `• Presentation Time: 10 minutes + 5 minutes Q&A
      • Audience: Panel of magical innovation experts
      • Format: Live demonstration preferred
      • Visual Aids: Magical projections encouraged
      
      Show us the future of magical innovation!`
    },
    {
      title: "Evaluation Matrix",
      content: `Your magical vision will be assessed on:
      
      🌟 Innovation Impact (35%)
      🔮 Technical Feasibility (25%)
      💡 Market Potential (20%)
      🎪 Presentation Quality (15%)
      ⚡ Implementation Plan (5%)
      
      The winning vision will receive funding to make their magical dreams reality!`
    }
  ];

  if (showLoading && !hasVisited) {
    return <LoadingScreen onComplete={handleLoadingComplete} />;
  }

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-parchment to-parchment-aged">
      {/* Header */}
      <motion.header
        className="sticky top-0 z-40 bg-gradient-parchment border-b border-magical-gold/30 backdrop-blur-sm"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <motion.img
            src={gringottsLogo}
            alt="Gringotts Innovation Vault"
            className="h-12 w-auto"
            whileHover={{ scale: 1.05 }}
          />
          <motion.h1
            className="text-xl md:text-2xl font-magical text-magical-gold drop-shadow-glow"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            🪙 Gringotts Innovation Vault
          </motion.h1>
        </div>
      </motion.header>

      {/* Navigation */}
      <motion.nav
        className="sticky top-20 z-30 bg-magical-navy/10 backdrop-blur-sm border-b border-magical-gold/20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <div className="container mx-auto px-4 py-2">
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            {[
              { label: 'Overview', id: 'overview' },
              { label: 'Register', id: 'register' },
              { label: 'Rounds', id: 'rounds' },
              { label: 'Rules', id: 'rules' },
              { label: 'Coordinators', id: 'coordinators' }
            ].map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="font-magical text-magical-navy hover:text-magical-gold transition-colors px-3 py-1 rounded"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
              </motion.button>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 space-y-16">
        {/* Hero Section */}
        <motion.section
          className="text-center py-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-magical text-magical-gold mb-4 drop-shadow-glow">
            Where Genius Dares
          </h2>
          <h3 className="text-2xl md:text-4xl font-magical text-magical-navy mb-6">
            and Magic Decides
          </h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Welcome to the most prestigious innovation challenge in the wizarding world. 
            Where brilliant minds converge to unlock the secrets of magical technology and shape the future.
          </p>
        </motion.section>

        {/* Event Overview */}
        <section id="overview">
          <ScrollContainer>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-magical text-magical-gold mb-4">Event Overview</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <motion.div
                className="text-center p-4"
                whileHover={{ scale: 1.05 }}
              >
                <Calendar className="w-12 h-12 mx-auto mb-3 text-magical-gold" />
                <h4 className="font-magical text-magical-navy mb-2">When</h4>
                <p className="text-sm text-muted-foreground">March 15-16, 2024<br />48 Hours of Magic</p>
              </motion.div>
              
              <motion.div
                className="text-center p-4"
                whileHover={{ scale: 1.05 }}
              >
                <MapPin className="w-12 h-12 mx-auto mb-3 text-magical-gold" />
                <h4 className="font-magical text-magical-navy mb-2">Where</h4>
                <p className="text-sm text-muted-foreground">Hogwarts Great Hall<br />Innovation Wing</p>
              </motion.div>
              
              <motion.div
                className="text-center p-4"
                whileHover={{ scale: 1.05 }}
              >
                <Users className="w-12 h-12 mx-auto mb-3 text-magical-gold" />
                <h4 className="font-magical text-magical-navy mb-2">Who</h4>
                <p className="text-sm text-muted-foreground">Teams of 3-4<br />All skill levels welcome</p>
              </motion.div>
            </div>

            <div className="prose prose-lg max-w-none text-foreground">
              <p className="text-center text-lg leading-relaxed">
                The Gringotts Innovation Vault is more than just a competition—it's a gathering of the most innovative minds 
                in the magical community. Participants will face challenges that test not only their magical abilities but 
                their capacity to think beyond conventional spellcasting.
              </p>
              
              <p className="text-center mt-4">
                Join us for two days of intense magical innovation, where participants will compete in the legendary 
                <strong className="text-magical-gold"> "Unlock the Vaults"</strong> challenge and present their visions 
                in the <strong className="text-magical-gold">"Vault of Vision"</strong> showcase.
              </p>
            </div>
          </ScrollContainer>
        </section>

        {/* Registration */}
        <section id="register">
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-magical text-magical-gold mb-6">Join the Magic</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Ready to test your innovative spirit? Register now and secure your place among the most brilliant minds 
              in magical innovation.
            </p>
            <RegistrationButton registrationLink="https://example.com/register" />
          </motion.div>
        </section>

        {/* Event Rounds */}
        <section id="rounds">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-magical text-magical-gold mb-4">The Magical Challenges</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Two legendary rounds await the brave. Click on each magical tome to discover the secrets within.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <InteractiveBook
                title="Unlock the Vaults"
                description="Problem-solving challenge"
                pages={unlockVaultsPages}
                color="gold"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <InteractiveBook
                title="Vault of Vision"
                description="Innovation showcase"
                pages={vaultVisionPages}
                color="navy"
              />
            </motion.div>
          </div>
        </section>

        {/* Rules */}
        <section id="rules">
          <ScrollContainer>
            <div className="text-center mb-8">
              <Scroll className="w-12 h-12 mx-auto mb-4 text-magical-gold" />
              <h2 className="text-3xl font-magical text-magical-gold mb-4">Sacred Rules of the Vault</h2>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-magical text-magical-navy mb-3">🎯 Participation Guidelines</h3>
                <ul className="space-y-2 text-foreground">
                  <li>• Teams must consist of 3-4 members maximum</li>
                  <li>• All participants must register before the deadline</li>
                  <li>• Magical tools and equipment will be provided</li>
                  <li>• Outside magical assistance is strictly forbidden</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-magical text-magical-navy mb-3">⚖️ Code of Magical Conduct</h3>
                <ul className="space-y-2 text-foreground">
                  <li>• Respect all fellow innovators and their magical creations</li>
                  <li>• No dark magic or forbidden spells allowed</li>
                  <li>• All solutions must be original and created during the event</li>
                  <li>• Plagiarism or magical theft will result in immediate disqualification</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-magical text-magical-navy mb-3">🏆 Judging & Awards</h3>
                <ul className="space-y-2 text-foreground">
                  <li>• Decisions by the Council of Innovation are final</li>
                  <li>• Winners will be announced at the Grand Closing Ceremony</li>
                  <li>• Prizes include magical artifacts and research funding</li>
                  <li>• All participants receive certificates of magical achievement</li>
                </ul>
              </div>
            </div>
          </ScrollContainer>
        </section>

        {/* Coordinators */}
        <section id="coordinators">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-magical text-magical-gold mb-4">Event Coordinators</h2>
            <p className="text-lg text-muted-foreground">
              Meet the magical minds organizing this extraordinary event
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <MagicalCard>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-magical rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-8 h-8 text-parchment" />
                </div>
                <h3 className="text-xl font-magical text-magical-navy mb-2">Professor Albus Innovatus</h3>
                <p className="text-magical-gold mb-4">Chief Innovation Officer</p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-center">
                    <Phone className="w-4 h-4 mr-2 text-magical-gold" />
                    <span>+1 (555) MAGIC-01</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <Mail className="w-4 h-4 mr-2 text-magical-gold" />
                    <span>albus@gringotts-vault.magic</span>
                  </div>
                </div>
              </div>
            </MagicalCard>

            <MagicalCard>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-mystical rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Trophy className="w-8 h-8 text-magical-gold" />
                </div>
                <h3 className="text-xl font-magical text-magical-navy mb-2">Luna Creativus</h3>
                <p className="text-magical-gold mb-4">Innovation Challenge Director</p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-center">
                    <Phone className="w-4 h-4 mr-2 text-magical-gold" />
                    <span>+1 (555) MAGIC-02</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <Mail className="w-4 h-4 mr-2 text-magical-gold" />
                    <span>luna@gringotts-vault.magic</span>
                  </div>
                </div>
              </div>
            </MagicalCard>
          </div>
        </section>
      </main>

      {/* Footer */}
      <motion.footer
        className="bg-magical-navy text-secondary-foreground py-8 border-t-4 border-magical-gold"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex justify-center items-center mb-4">
              <div className="h-px bg-magical-gold/30 flex-1" />
              <div className="px-4">
                <motion.div
                  className="w-8 h-8 bg-magical-gold rounded-full flex items-center justify-center"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <span className="text-magical-navy font-bold">🪙</span>
                </motion.div>
              </div>
              <div className="h-px bg-magical-gold/30 flex-1" />
            </div>
            
            <p className="text-magical-gold font-magical mb-2">
              © 2024 Gringotts Innovation Vault
            </p>
            <p className="text-sm text-secondary-foreground/80">
              Where Genius Dares and Magic Decides
            </p>
            
            <div className="mt-4 flex justify-center space-x-4">
              {['🔮', '⚡', '🌟', '✨'].map((icon, index) => (
                <motion.span
                  key={index}
                  className="text-magical-gold text-xl cursor-pointer"
                  whileHover={{ scale: 1.3, rotate: 10 }}
                  animate={{ 
                    y: [0, -5, 0],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{ 
                    duration: 2,
                    delay: index * 0.2,
                    repeat: Infinity 
                  }}
                >
                  {icon}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </motion.footer>
    </div>
  );
};

export default Index;
