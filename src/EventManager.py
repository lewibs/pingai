import eventpy.eventdispatcher

dispatcher = eventpy.EventDispatcher()

def dispatchEvent(event, *args, **kwargs):
    global dispatcher
    print("managing dispatch")
    print(args)
    dispatcher.dispatch(event.value, *args, **kwargs)

def addEventListener(event, function):
    global dispatcher
    dispatcher.appendListener(event.value, function)