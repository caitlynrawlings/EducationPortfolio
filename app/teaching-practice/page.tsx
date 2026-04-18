"use client";
import { use, useEffect, useState } from "react";
import PlanningAndPreparation from "./planning-and-preparation/page";
import TheClassroomEnvironment from "./the-classroom-environment/page";
import Instruction from "./instruction/page";
import ProfessionalResponsibilities from "./professional-responsibilities/page";

const tabs = [
  {
    label: 'Planning & Preparation',
    href: `/planning-and-preparation`,
    sections: [
      { label: 'Lesson Plans', id: 'lesson-plans' },
      { label: 'Differentiated Materials', id: 'differentiated-materials' },
      { label: 'Assessment Tools & Data Analysis', id: 'assessment-tools' },
    ],
  },
  {
    label: 'The Classroom Environment',
    href: `/the-classroom-environment`,
    sections: [
      { label: 'Room Layout', id: 'room-layout' },
      { label: 'Seating Chart', id: 'seating-chart' },
      { label: 'Classroom Management', id: 'classroom-management' },
    ],
  },
  {
    label: 'Instruction',
    href: `/instruction`,
    sections: [
      { label: 'Written Feedback', id: 'written-feedback' },
      { label: 'Personal Reflections', id: 'personal-reflections' },
      { label: 'Responding to Feedback', id: 'responding-to-feedback' },
    ],
  },
  {
    label: 'Professional Responsibilities',
    href: `/professional-responsibilities`,
    sections: [
      { label: 'General Parent Updates', id: 'parent-updates' },
      { label: 'Parent Communication', id: 'parent-behavior' },
      { label: 'Department & Staff Meetings', id: 'meetings' },
      { label: 'Professional Development', id: 'professional-development' },
      { label: 'IEP & Student Support', id: 'iep' },
    ],
  },
]

export default function TeachingPractice() {
  const [activeTab, setActiveTab] = useState("planning-and-preparation");
  const [activeSubTab, setActiveSubTab] = useState("");

  useEffect(() => {
    const el = document.getElementById(activeTab);
    const offset = 500;

    if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - offset;

        window.scrollTo({
            top,
            behavior: "auto"
        })
    }
  }, [activeTab]);

  useEffect(() => {
  const currentTab = tabs.find(
    tab =>
      tab.href === `/${activeTab
        .toLowerCase()
        .replace(/ /g, "-")
        .replace(/&/g, "and")}`
  );

  if (!currentTab) return;

  function handleScroll() {
    const offset = 180; // 👈 matches your header spacing
    let closestSection = "";
    let closestDistance = Infinity;

    currentTab?.sections.forEach(section => {
      const el = document.getElementById(section.id);
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const distance = Math.abs(rect.top - offset);

      // only consider sections that have reached near the top
      if (rect.top <= offset + 100 && distance < closestDistance) {
        closestDistance = distance;
        closestSection = section.id;
      }
    });

    if (closestSection) {
      setActiveSubTab(closestSection);
    }
  }

  window.addEventListener("scroll", handleScroll);
  handleScroll(); // run once on mount

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, [activeTab]);

  function scroll(id : string, offset : number) {
    const el = document.getElementById(id);

    if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - offset;

        window.scrollTo({
            top,
            behavior: "smooth"
        })
    }
  }


  return (
    <div>
        
      <div className="practice-header">
        <h1>Teaching Practice</h1>
        <p>
            This page highlights my teaching practices through the four domains of the <a className="simple-link" href="https://danielsongroup.org/the-framework-for-teaching/" target="_blank" rel="noopener noreferrer">Danielson Framework for Teaching</a>.
        </p>
      </div>

        <div className="tabs-container" >
            <div className="tabs">
                <button
                    className={`tab-button ${activeTab === "planning-and-preparation" ? "active" : ""}`}
                    onClick={() => {
                        setActiveTab("planning-and-preparation");
                        setActiveSubTab("");
                        scroll("planning-and-preparation", 500);
                    }}
                >
                    Planning & Preparation
                </button>

                <button
                    className={`tab-button ${activeTab === "the-classroom-environment" ? "active" : ""}`}
                    onClick={() => {
                        setActiveTab("the-classroom-environment");
                        setActiveSubTab("");
                        scroll("the-classroom-environment", 500);
                    }}
                >
                    Classroom Environment
                </button>

                <button
                    className={`tab-button ${activeTab === "instruction" ? "active" : ""}`}
                    onClick={() => {
                        setActiveTab("instruction");
                        setActiveSubTab("");
                        scroll("instruction", 500);
                    }}
                >
                    Instruction
                </button>

                <button
                    className={`tab-button ${activeTab === "professional-responsibilities" ? "active" : ""}`}
                    onClick={() => {
                        setActiveTab("professional-responsibilities");
                        setActiveSubTab("");
                        scroll("professional-responsibilities", 500);
                    }}
                    
                >
                    Professional Responsibilities
                </button>
            </div>
            <div className="subtabs">
                {tabs.find(tab => tab.href === `/${activeTab.toLowerCase().replace(/ /g, "-").replace(/&/g, "and")}`)?.sections.map(section => (
                    <button
                        className={`subtab-button ${activeSubTab === section.id ? "active" : ""}`}
                        key={"subtab-" + section.id}
                        onClick={() => {
                            setActiveSubTab(section.id);
                            // srolls to section with space between the top adn the section
                            scroll(section.id, 170);
                        }}
                    >
                        {section.label}
                    </button>
                ))}
            </div>
        </div>
        

    <div className="tab-content">
        {activeTab === "planning-and-preparation" && (
            <PlanningAndPreparation />
        )}

        {activeTab === "the-classroom-environment" && (
            <TheClassroomEnvironment />
        )}

        {activeTab === "instruction" && (
            <Instruction />
        )}

        {activeTab === "professional-responsibilities" && (
            <ProfessionalResponsibilities />
        )}
        </div>
        
    </div>
  )
}