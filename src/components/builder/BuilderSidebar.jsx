import React from 'react';
import { Plus, Check, RefreshCw } from 'lucide-react';
import { Card } from '../common/Card';
import { Button } from '../common/Button';

export const BuilderSidebar = ({
  categories,
  build,
  onOpenModal,
}) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between pb-3 border-b border-white/5">
        <span className="text-xs font-mono uppercase tracking-widest text-white">System Component Slots</span>
        <span className="text-xs font-mono text-[#9D9D9D]">8 SLOTS</span>
      </div>

      {categories.map(({ key, label, filterCategory }) => {
        const selectedItem = build[key];

        return (
          <Card
            key={key}
            hoverEffect={false}
            className={`p-5 transition-all duration-300 flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
              selectedItem ? 'border-white/15' : 'border-white/5 hover:border-white/10'
            }`}
          >
            <div className="flex items-center gap-4">
              <div
                className={`w-11 h-11 rounded-full flex items-center justify-center shrink-0 ${
                  selectedItem ? 'bg-white text-[#1C1C1C]' : 'bg-[#1C1C1C] text-[#9D9D9D] border border-white/5'
                }`}
              >
                {selectedItem ? <Check className="w-5 h-5" /> : <Plus className="w-4 h-4" />}
              </div>

              <div>
                <span className="text-[10px] font-mono tracking-widest text-[#9D9D9D] uppercase block">
                  {label}
                </span>
                {selectedItem ? (
                  <div>
                    <h4 className="text-sm font-medium text-white tracking-tight">{selectedItem.name}</h4>
                    <p className="text-xs text-[#9D9D9D] font-mono mt-0.5">
                      ${typeof selectedItem.price === 'number' ? selectedItem.price.toLocaleString() : selectedItem.price} • {selectedItem.power || 0}W
                    </p>
                  </div>
                ) : (
                  <p className="text-xs text-[#9D9D9D] font-normal mt-0.5">Unselected</p>
                )}
              </div>
            </div>

            <div className="flex items-center gap-2">
              {selectedItem ? (
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => onOpenModal(key)}
                  icon={RefreshCw}
                >
                  Swap
                </Button>
              ) : (
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => onOpenModal(key)}
                >
                  Select {filterCategory}
                </Button>
              )}
            </div>
          </Card>
        );
      })}
    </div>
  );
};

export default BuilderSidebar;
