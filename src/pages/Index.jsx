import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gray-100">
        <h1 className="text-5xl font-bold mb-4">Welcome to Our Startup</h1>
        <p className="text-xl mb-8">Innovating the future, one step at a time.</p>
        <Button variant="primary" size="lg">Get Started</Button>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <h2 className="text-4xl font-bold text-center mb-12">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Feature One</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Brief description of feature one.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Feature Two</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Brief description of feature two.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Feature Three</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Brief description of feature three.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 bg-gray-100">
        <h2 className="text-4xl font-bold text-center mb-12">About Us</h2>
        <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8">
          <img src="/placeholder.svg" alt="About Us" className="w-64 h-64 object-cover rounded-full" />
          <p className="text-lg max-w-xl text-center md:text-left">
            Our mission is to revolutionize the industry with our innovative solutions. We are committed to excellence and driven by passion.
          </p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <h2 className="text-4xl font-bold text-center mb-12">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <Avatar>
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <CardTitle>John Doe</CardTitle>
            </CardHeader>
            <CardContent>
              <p>"This startup has changed my life for the better. Highly recommended!"</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Avatar>
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback>JS</AvatarFallback>
              </Avatar>
              <CardTitle>Jane Smith</CardTitle>
            </CardHeader>
            <CardContent>
              <p>"Exceptional service and innovative solutions. A game-changer in the industry."</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Avatar>
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback>AB</AvatarFallback>
              </Avatar>
              <CardTitle>Alex Brown</CardTitle>
            </CardHeader>
            <CardContent>
              <p>"I am extremely satisfied with the results. This startup is the future."</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="text-center py-16 bg-gray-100">
        <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
        <Button variant="primary" size="lg">Join Us Now</Button>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-800 text-white text-center">
        <p>Contact us: email@example.com | +123 456 7890 | 123 Startup St, Innovation City</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <Separator orientation="vertical" />
          <a href="#" className="hover:underline">Terms of Service</a>
        </div>
      </footer>
    </div>
  );
};

export default Index;