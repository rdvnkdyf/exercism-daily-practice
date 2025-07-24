class Clock:
    def __init__(self, hour, minute):
        self.minutes_ = hour*60 + minute
    def __repr__(self):
        return f"Clock({(self.minutes_ // 60) % 24}, {self.minutes_ % 60})"
    def __str__(self):
        hr = (self.minutes_ // 60) % 24
        mn = self.minutes_ % 60
        return f"{'0' if hr < 10 else ''}{hr}:{'0' if mn < 10 else ''}{mn}"
        
    def __eq__(self, other):
        return str(self) == str(other)
    def __add__(self, minutes):
        self.minutes_ += minutes
        return self
    def __sub__(self, minutes):
        self.minutes_ -= minutes
        return self