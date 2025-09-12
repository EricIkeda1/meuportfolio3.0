import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

interface ProjectFiltersProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
  projectCounts: Record<string, number>;
}

const filters = [
  { id: 'all', label: 'Todos', icon: '🎯' },
  { id: 'frontend', label: 'Front-end', icon: '🎨' },
  { id: 'backend', label: 'Back-end', icon: '⚙️' },
  { id: 'fullstack', label: 'Full-stack', icon: '🌐' },
  { id: 'security', label: 'Segurança', icon: '🔒' },
  { id: 'mobile', label: 'Mobile', icon: '📱' },
  { id: 'research', label: 'Pesquisa', icon: '🔬' }
];

export function ProjectFilters({ activeFilter, onFilterChange, projectCounts }: ProjectFiltersProps) {
  return (
    <motion.div 
      className="flex flex-wrap justify-center gap-3 mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      {filters.map((filter, index) => {
        const count = projectCounts[filter.id] || 0;
        const isActive = activeFilter === filter.id;
        
        return (
          <motion.div
            key={filter.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              variant={isActive ? "default" : "outline"}
              size="sm"
              onClick={() => onFilterChange(filter.id)}
              className={`relative space-x-2 ${
                isActive 
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700' 
                  : 'hover:bg-muted'
              }`}
            >
              <span>{filter.icon}</span>
              <span>{filter.label}</span>
              {count > 0 && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <Badge 
                    variant={isActive ? "secondary" : "default"}
                    className={`ml-1 ${
                      isActive 
                        ? 'bg-white/20 text-white' 
                        : 'bg-blue-500 text-white'
                    }`}
                  >
                    {count}
                  </Badge>
                </motion.div>
              )}
              
              {isActive && (
                <motion.div
                  className="absolute inset-0 rounded-md ring-2 ring-white/50"
                  layoutId="activeFilter"
                  transition={{ duration: 0.2 }}
                />
              )}
            </Button>
          </motion.div>
        );
      })}
    </motion.div>
  );
}