import numpy as np
import EventManager
from events import neuron_events, FiredDto

class Neuron:
    location = np.array

    def __init__(self, x, y ,z):
        self.location = np.array([x,y,z])

    def fire(self):
        data = FiredDto(location=self.location)
        print("firing neuron")
        print(data)
        EventManager.dispatchEvent(neuron_events.FIRE, data)