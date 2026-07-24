import React from 'react';
import { Trash2, Plus, Minus } from 'lucide-react';
import { Card } from '../common/Card';

export const CartItem = ({ item, onUpdateQuantity, onRemove }) => {
  const itemTotal = item.price * item.quantity;

  return (
    <Card hoverEffect={false} className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
      <div className="flex items-center gap-4">
        {/* Hardware Thumbnail Badge */}
        <div className="w-14 h-14 rounded-full bg-[#1C1C1C] border border-white/5 flex items-center justify-center shrink-0 font-mono text-[11px] text-[#9D9D9D]">
          {item.badge || 'HW'}
        </div>

        <div>
          <span className="text-[10px] font-mono tracking-widest text-[#9D9D9D] uppercase block">
            {item.category || 'Hardware'}
          </span>
          <h4 className="text-sm font-medium text-white tracking-tight">{item.name}</h4>
          {item.specs?.components && (
            <p className="text-[11px] text-[#9D9D9D] line-clamp-1 mt-0.5">
              {item.specs.components}
            </p>
          )}
          <p className="text-xs font-mono text-[#9D9D9D] mt-1">
            ${item.price.toLocaleString()} each
          </p>
        </div>
      </div>

      {/* Quantity & Subtotal */}
      <div className="flex items-center justify-between sm:justify-end gap-6 pt-2 sm:pt-0 border-t sm:border-t-0 border-white/5">
        <div className="flex items-center gap-3 bg-[#1C1C1C] border border-white/5 rounded-full px-3.5 py-1.5">
          <button
            onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
            className="text-[#9D9D9D] hover:text-white transition-colors"
            title="Decrease Quantity"
          >
            <Minus className="w-3.5 h-3.5" />
          </button>
          <span className="text-xs font-mono font-bold text-white px-1">
            {item.quantity}
          </span>
          <button
            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
            className="text-[#9D9D9D] hover:text-white transition-colors"
            title="Increase Quantity"
          >
            <Plus className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="text-right">
          <span className="text-sm font-mono font-semibold text-white block">
            ${itemTotal.toLocaleString()}
          </span>
        </div>

        <button
          onClick={() => onRemove(item.id)}
          className="p-2 text-[#9D9D9D] hover:text-white transition-colors"
          title="Remove Item"
        >
          <Trash2 className="w-4 h-4" />
        </button>
      </div>
    </Card>
  );
};

export default CartItem;
