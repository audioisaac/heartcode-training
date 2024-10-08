import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function AboutMe() {
  return (
    <div>
        Hello world this is the about me route
        <Card>
            <CardHeader>
                <CardTitle>
                    Hello I am iz
                </CardTitle>
                <CardDescription>
                    heartcode more like hard code
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex flex-row gap-2">
                    <p className="font-bold">Name:</p>
                    iz
                </div>
                <div className="flex flex-row gap-2"><p className="font-bold">Major:</p>danger</div>
                <div className="flex flex-row gap-2"><p className="font-bold">Hobbies:</p>crying</div>
            </CardContent>
        </Card>
    </div>
  );
}