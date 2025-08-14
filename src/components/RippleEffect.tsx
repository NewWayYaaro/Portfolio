// React library import kar rahe hain taaki hum React component bana sakein
import React, { useEffect } from 'react';

// ==== Props (data) ka structure define karna ====
// RippleEffect component ko ye 3 cheezein milengi:
// 1. x: Ripple effect ka horizontal position (pixels me)
// 2. y: Ripple effect ka vertical position (pixels me)
// 3. onComplete: Ek function jo ripple animation khatam hone par chalega
interface RippleEffectProps {
  x: number;
  y: number;
  onComplete: () => void;
}

// ==== RippleEffect Component ====
// Ye ek chhota animation hai jo click ya koi action hone par wave (ripple) effect banata hai
const RippleEffect: React.FC<RippleEffectProps> = ({ x, y, onComplete }) => {

  // useEffect: React ka hook jo component ke render hone ke baad kaam karta hai
  useEffect(() => {
    // setTimeout: 600 milliseconds (0.6 second) baad onComplete function chalata hai
    const timeout = setTimeout(() => onComplete(), 600);

    // Cleanup function:
    // Agar component 0.6 second se pehle remove ho jaye to timeout cancel ho jaye
    return () => clearTimeout(timeout);
  }, [onComplete]); 
  // [onComplete] ka matlab: Agar onComplete function badle to ye effect dobara chale

  return (
    // Ripple effect ka shape banane ke liye ek <span> tag
    <span
      className="ripple" // CSS class jo animation aur style control karegi
      style={{
        position: 'absolute', // Ye ripple screen me fixed jagah par dikhane ke liye
        left: x,  // X-axis position (horizontal)
        top: y,   // Y-axis position (vertical)
      }}
    />
  );
};

// Component ko export kar rahe hain taaki dusre files me use ho sake
export default RippleEffect;
