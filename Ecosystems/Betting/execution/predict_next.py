import sys
from roulette_engine import RouletteEngine

def main():
    if len(sys.argv) < 2:
        # Default predictions if no numbers provided
        engine = RouletteEngine()
        print(", ".join(map(str, engine.analyze())))
        return

    try:
        # Parse sequence from command line (comma separated or space separated)
        raw_input = " ".join(sys.argv[1:]).replace(',', ' ')
        sequence = [int(x) for x in raw_input.split()]
        
        engine = RouletteEngine()
        for num in sequence:
            engine.add_number(num)
        
        predictions = engine.analyze()
        print(", ".join(map(str, predictions)))
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    main()
