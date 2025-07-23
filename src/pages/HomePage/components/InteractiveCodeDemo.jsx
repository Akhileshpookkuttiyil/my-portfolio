import React, { useState } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Icon from "../../../components/AppIcon";
import Button from "../../../components/UI/Button";

const InteractiveCodeDemo = () => {
  const [activeTab, setActiveTab] = useState("frontend");
  const [copied, setCopied] = useState(false);

  const codeExamples = {
    frontend: {
      title: "React Dashboard",
      language: "jsx",
      code: `import React, { useEffect, useState } from 'react';
import { motion as Motion } from 'framer-motion';

const Dashboard = ({ user }) => {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      const res = await fetch(\`/api/stats/\${user.id}\`);
      const data = await res.json();
      setStats(data);
    };
    fetchStats();
  }, [user.id]);

  if (!stats) return <p>Loading...</p>;

  return (
    <Motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <h1>Welcome, {user.name}</h1>
      <p>Posts: {stats.posts}</p>
      <p>Comments: {stats.comments}</p>
    </Motion.div>
  );
};`,
    },

    backend: {
      title: "Express Auth Route",
      language: "javascript",
      code: `const router = require('express').Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password)
    return res.status(400).json({ msg: 'Email & password required' });

  const user = await User.findOne({ email });
  if (!user || !(await user.isValidPassword(password)))
    return res.status(401).json({ msg: 'Invalid credentials' });

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: '1d',
  });

  res.json({ token, user: { id: user._id, name: user.firstName } });
});

module.exports = router;`,
    },

    database: {
      title: "MongoDB User Model",
      language: "javascript",
      code: `const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    match: [/^\\S+@\\S+\\.\\S+$/, 'Invalid email'],
  },
  passwordHash: { type: String, required: true, minlength: 6 },
  firstName: { type: String, trim: true },
  lastName: { type: String, trim: true },
  createdAt: { type: Date, default: Date.now },
});

userSchema.pre('save', async function (next) {
  if (!this.isModified('passwordHash')) return next();
  this.passwordHash = await bcrypt.hash(this.passwordHash, 12);
  next();
});

userSchema.methods.isValidPassword = function (password) {
  return bcrypt.compare(password, this.passwordHash);
};

module.exports = mongoose.model('User', userSchema);`,
    },
  };

  const tabs = [
    { id: "frontend", label: "Frontend", icon: "Code" },
    { id: "backend", label: "Backend", icon: "Server" },
    { id: "database", label: "Database", icon: "Database" },
  ];

  return (
    <section className="py-18 bg-background">
      <div className="container mx-auto px-4 lg:px-6">
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-foreground">Interactive </span>
              <span className="text-gradient">Code Examples</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore real code samples from my projects. Toggle between
              frontend, backend, and database implementations.
            </p>
          </div>

          {/* Code Demo Container */}
          <div className="bg-card border border-border rounded-xl overflow-hidden shadow-dramatic">
            {/* Tab Navigation */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 px-4 sm:px-6 py-4 bg-muted/20 border-b border-border">
              <div className="flex flex-wrap gap-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-1 px-3 sm:px-4 py-1.5 rounded-md text-xs sm:text-sm font-medium transition-all duration-200 ${
                      activeTab === tab.id
                        ? "bg-accent text-accent-foreground"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    }`}
                  >
                    <Icon name={tab.icon} size={14} />
                    <span>{tab.label}</span>
                  </button>
                ))}
              </div>

              <div className="flex flex-wrap gap-2">
                <CopyToClipboard
                  text={codeExamples[activeTab].code}
                  onCopy={() => {
                    setCopied(true);
                    setTimeout(() => setCopied(false), 1500);
                  }}
                >
                  <Button
                    variant="ghost"
                    size="sm"
                    iconName={copied ? "Check" : "Copy"}
                    iconPosition="left"
                    className="text-xs sm:text-sm text-muted-foreground hover:text-foreground"
                  >
                    {copied ? "Copied!" : "Copy"}
                  </Button>
                </CopyToClipboard>

                <Button
                  variant="ghost"
                  size="sm"
                  iconName="ExternalLink"
                  iconPosition="left"
                  className="text-xs sm:text-sm text-muted-foreground hover:text-foreground"
                >
                  View Full
                </Button>
              </div>
            </div>

            {/* Code Content */}
            <div className="relative">
              <AnimatePresence mode="wait">
                <Motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="p-4 sm:p-6"
                >
                  <div className="flex flex-wrap items-center justify-between mb-3 sm:mb-4 gap-2">
                    <div className="flex items-center gap-1.5 text-xs sm:text-sm">
                      <Icon
                        name="FileText"
                        size={14}
                        className="text-muted-foreground"
                      />
                      <span className="font-medium text-foreground">
                        {codeExamples[activeTab].title}
                      </span>
                    </div>
                    <span className="text-xs font-mono text-muted-foreground">
                      {codeExamples[activeTab].language}
                    </span>
                  </div>

                  {/* Code Block */}
                  <div className="bg-background rounded-lg border border-border overflow-x-auto">
                    <pre className="p-4 text-xs sm:text-sm font-mono leading-relaxed">
                      <code className="text-foreground whitespace-pre">
                        {codeExamples[activeTab].code}
                      </code>
                    </pre>
                  </div>

                  {/* Code Stats */}
                  <div className="flex flex-wrap items-center justify-between mt-4 pt-4 border-t border-border gap-2 text-xs sm:text-sm">
                    <div className="flex items-center gap-4 text-muted-foreground">
                      <span>
                        Lines: {codeExamples[activeTab].code.split("\n").length}
                      </span>
                      <span>•</span>
                      <span>Language: {codeExamples[activeTab].language}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-success rounded-full animate-blink" />
                      <span className="text-muted-foreground">
                        Production Ready
                      </span>
                    </div>
                  </div>
                </Motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Tech Stack Tags */}
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 text-center"
          >
            <p className="text-sm text-muted-foreground mb-4">
              Technologies demonstrated above:
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "React",
                "Node.js",
                "Express",
                "MongoDB",
                "JWT",
                "Framer Motion",
              ].map((tech) => (
                <span
                  key={tech}
                  className="relative group cursor-pointer px-3 py-1 text-sm text-muted-foreground bg-muted/50 border border-border rounded-full overflow-hidden"
                >
                  <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                    {tech}
                  </span>
                  <span
                    className="absolute inset-0 rounded-full border-2 border-transparent group-hover:animate-border-spin group-hover:border-accent pointer-events-none"
                    aria-hidden="true"
                  />
                </span>
              ))}
            </div>
          </Motion.div>
        </Motion.div>
      </div>
    </section>
  );
};

export default InteractiveCodeDemo;
