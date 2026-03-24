import { ShoppingCart } from "lucide-react";
import { Link } from "react-router";
import { Nut } from "../data/nuts";

interface NutCardProps {
  nut: Nut;
  onAddToCart: (nut: Nut) => void;
}

export function NutCard({ nut, onAddToCart }: NutCardProps) {
  const isOnSale = nut.oldPrice && nut.oldPrice > nut.price;
  
  return (
    <div className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 flex flex-col border border-secondary/20 relative h-full">
      {/* SALE Label */}
      {isOnSale && (
        <div className="absolute top-3 right-3 z-10 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg" style={{ backgroundColor: '#D98C2A' }}>
          SALE
        </div>
      )}
      
      <Link to={`/product/${nut.id}`}>
        <div className="aspect-square overflow-hidden bg-gray-100">
          <img
            src={nut.image}
            alt={nut.name}
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
          />
        </div>
      </Link>
      
      <div className="p-4 sm:p-6 flex-1 flex flex-col">
        <Link to={`/product/${nut.id}`}>
          <p className="text-sm text-card-foreground/60 mb-1">
            {nut.category}
          </p>
          <h3 className="font-semibold text-lg sm:text-xl text-card-foreground mb-2 hover:text-accent transition-colors">
            {nut.category} {nut.type}
          </h3>
        </Link>
        
        <p className="text-xs text-accent/70 mb-1">Article: {nut.article}</p>
        <p className="text-sm text-gray-600 mb-2">{nut.weight}</p>
        
        <div className="mt-auto">
          {/* Price Display */}
          <div className="mb-4">
            {isOnSale ? (
              <div className="flex items-center gap-2 flex-wrap">
                <p className="text-2xl sm:text-3xl font-bold" style={{ color: '#2C2C18' }}>
                  €{nut.price.toFixed(2)}
                </p>
                <p className="text-lg sm:text-xl text-gray-400 line-through">
                  €{nut.oldPrice!.toFixed(2)}
                </p>
              </div>
            ) : (
              <p className="text-2xl sm:text-3xl font-bold text-accent">
                €{nut.price.toFixed(2)}
              </p>
            )}
          </div>
          
          <button
            onClick={() => onAddToCart(nut)}
            className="w-full bg-accent hover:bg-accent/90 text-accent-foreground py-2 px-3 rounded-lg flex items-center justify-center space-x-2 transition-colors text-sm"
          >
            <ShoppingCart className="w-4 h-4" />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
}