'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { projectsData, ProjectItem } from '@/data/projectsData';

interface OwnerContextType {
  isOwner: boolean;
  login: (password: string) => boolean;
  logout: () => void;
  customProjects: ProjectItem[];
  allProjects: ProjectItem[];
  addProject: (newProject: Omit<ProjectItem, 'id'>) => void;
  deleteProject: (id: string) => void;
  isUploadModalOpen: boolean;
  setUploadModalOpen: (open: boolean) => void;
}

const OwnerContext = createContext<OwnerContextType>({
  isOwner: false,
  login: () => false,
  logout: () => {},
  customProjects: [],
  allProjects: projectsData,
  addProject: () => {},
  deleteProject: () => {},
  isUploadModalOpen: false,
  setUploadModalOpen: () => {},
});

// Master Owner Passwords / PINs:
const VALID_PASSWORDS = ['meerab@2026', 'kamran2026', '906283', 'admin@meerab'];

export function OwnerProvider({ children }: { children: React.ReactNode }) {
  const [isOwner, setIsOwner] = useState(false);
  const [customProjects, setCustomProjects] = useState<ProjectItem[]>([]);
  const [isUploadModalOpen, setUploadModalOpen] = useState(false);

  useEffect(() => {
    // Check saved session
    if (typeof window !== 'undefined') {
      const savedAuth = localStorage.getItem('meerab_owner_auth');
      if (savedAuth === 'true') {
        setIsOwner(true);
      }

      // Load custom projects
      const savedProjects = localStorage.getItem('meerab_custom_projects');
      if (savedProjects) {
        try {
          const parsed = JSON.parse(savedProjects);
          if (Array.isArray(parsed)) {
            setCustomProjects(parsed);
          }
        } catch (e) {
          console.error('Error loading custom projects:', e);
        }
      }
    }
  }, []);

  const login = (password: string): boolean => {
    const trimmed = password.trim();
    if (VALID_PASSWORDS.includes(trimmed)) {
      setIsOwner(true);
      localStorage.setItem('meerab_owner_auth', 'true');
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsOwner(false);
    localStorage.removeItem('meerab_owner_auth');
    setUploadModalOpen(false);
  };

  const addProject = (item: Omit<ProjectItem, 'id'>) => {
    const newId = `custom-${Date.now()}`;
    const fullProject: ProjectItem = {
      ...item,
      id: newId,
    };
    const updated = [fullProject, ...customProjects];
    setCustomProjects(updated);
    localStorage.setItem('meerab_custom_projects', JSON.stringify(updated));
  };

  const deleteProject = (id: string) => {
    const updated = customProjects.filter((p) => p.id !== id);
    setCustomProjects(updated);
    localStorage.setItem('meerab_custom_projects', JSON.stringify(updated));
  };

  // Merge custom projects with default extracted projects
  const allProjects = [...customProjects, ...projectsData];

  return (
    <OwnerContext.Provider
      value={{
        isOwner,
        login,
        logout,
        customProjects,
        allProjects,
        addProject,
        deleteProject,
        isUploadModalOpen,
        setUploadModalOpen,
      }}
    >
      {children}
    </OwnerContext.Provider>
  );
}

export const useOwner = () => useContext(OwnerContext);
