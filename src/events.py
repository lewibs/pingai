import eventpy as ep
from enum import Enum

# these are all stored here since events are anal to maintain so just keeping them
# all in one file helps keep track of what all has been made

#EVENTS
#this is used to trigger that a specific neuron has been fired
fired_neuron = ep.Event("fired-neuron")

class FiredDto():
    def __init__(self, location):
        self.location = location

# a list of events that this supports
class neuron_events(Enum):
    FIRE = fired_neuron