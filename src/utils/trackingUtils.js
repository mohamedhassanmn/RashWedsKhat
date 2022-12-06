export const eventNames = {
    SELECTED_PLACES: "SELECTED_PLACES"
}

export const isLocalhost = () =>
    window.location.href.includes('http://localhost');

export const sendEvents = (eventName, payload = {}) => {
    const eventPayload = {
        event: eventName,
        ...payload,
    };
    if (!isLocalhost()) {
        return window?.dataLayer?.push(eventPayload);
    }
    console.log('eventPayload', eventPayload);
};