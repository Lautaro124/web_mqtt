import mqtt from "mqtt";

export async function POST (req: Request) {
  const mqttClient = mqtt.connect('mqtt://localhost:1883');

  const response: {data:string} = await req.json();

  mqttClient.on('connect', () => {
    mqttClient.subscribe('light', () => {
      mqttClient.publish('light', response.data);
    });
  });
  
  return Response.json({
    sd: false
  })
}
