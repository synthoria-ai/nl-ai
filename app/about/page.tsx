import Link from 'next/link';
import { Code2, Laptop, Users, Linkedin, Target, ArrowRight, Sparkles } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { teamMembers, values, stats } from '@/lib/about-data';

export default function AboutPage() {
  const getValueIcon = (icon: string) => {
    switch (icon) {
      case 'code':
        return <Code2 className="w-8 h-8" />;
      case 'laptop':
        return <Laptop className="w-8 h-8" />;
      case 'users':
        return <Users className="w-8 h-8" />;
      default:
        return <Sparkles className="w-8 h-8" />;
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
      <section className="relative px-4 py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-purple-500/10 to-transparent" />
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center space-y-6">
            <div className="inline-block">
              <div className="flex items-center gap-2 px-4 py-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-full text-emerald-700 dark:text-emerald-400 text-sm font-medium mb-6">
                <Target className="w-4 h-4" />
                <span>Our Story</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-r from-emerald-600 to-purple-600 bg-clip-text text-transparent leading-tight">
              Making AI education accessible to everyone
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              We believe anyone can learn AI with the right guidance, hands-on practice, and supportive community.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 md:py-20">
        <div className="max-w-4xl mx-auto">
          <Card className="border-2 border-emerald-200 dark:border-emerald-800 bg-gradient-to-br from-emerald-50/50 to-purple-50/50 dark:from-emerald-950/20 dark:to-purple-950/20">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl md:text-4xl font-bold mb-4">Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-center">
                NeuralLearn AI was founded on the belief that artificial intelligence shouldn't be gatekept by academia or big tech.
                We're democratizing AI education by providing world-class courses, hands-on labs, and real-world projects that prepare
                you for AI careers—whether you're starting from scratch or leveling up.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="px-4 py-16 md:py-20 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value) => (
              <Card key={value.id} className="border-2 hover:border-emerald-300 dark:hover:border-emerald-700 transition-all hover:shadow-lg group">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-gradient-to-br from-emerald-500 to-purple-500 rounded-2xl text-white group-hover:scale-110 transition-transform">
                      {getValueIcon(value.icon)}
                    </div>
                  </div>
                  <CardTitle className="text-center text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-base">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 md:py-20 bg-gradient-to-br from-emerald-600 to-purple-600">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">By The Numbers</h2>
            <p className="text-lg text-emerald-50">
              Our impact in the AI education community
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <Card key={stat.id} className="text-center border-0 bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all">
                <CardContent className="pt-8 pb-8">
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-lg text-emerald-100">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 md:py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet the Team</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              World-class AI practitioners and educators
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
              <Card key={member.id} className="border-2 hover:border-emerald-300 dark:hover:border-emerald-700 transition-all hover:shadow-lg group">
                <CardHeader className="text-center pb-3">
                  <div className="flex justify-center mb-4">
                    <Avatar className="w-20 h-20 border-4 border-emerald-200 dark:border-emerald-800 group-hover:border-emerald-400 dark:group-hover:border-emerald-600 transition-colors">
                      <AvatarFallback className="bg-gradient-to-br from-emerald-500 to-purple-500 text-white text-xl font-bold">
                        {member.avatar}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  <CardTitle className="text-lg mb-1">{member.name}</CardTitle>
                  <Badge className="bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 hover:bg-emerald-200 dark:hover:bg-emerald-900/50">
                    {member.role}
                  </Badge>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-sm leading-relaxed mb-3">
                    {member.bio}
                  </CardDescription>
                  {member.linkedIn && (
                    <a
                      href={member.linkedIn}
                      className="inline-flex items-center gap-1 text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 text-sm font-medium transition-colors"
                    >
                      <Linkedin className="w-4 h-4" />
                      <span>LinkedIn</span>
                    </a>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 md:py-20 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <Card className="border-2 border-purple-200 dark:border-purple-800 bg-gradient-to-br from-purple-50/50 to-emerald-50/50 dark:from-purple-950/20 dark:to-emerald-950/20">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl md:text-4xl font-bold mb-4">How We Started</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-center mb-6">
                Founded in 2024 by AI practitioners frustrated with theoretical-only courses, we built the platform we wished
                existed—practical, project-based, and accessible. What started as a small community of learners has grown into
                a global movement democratizing AI education.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-center">
                Today, we're proud to serve over 50,000 learners across 120+ countries, helping them transition into AI careers
                and build the future with artificial intelligence.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-emerald-600 to-purple-600 rounded-3xl p-12 md:p-16 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }} />
            <div className="relative z-10 space-y-6">
              <Sparkles className="w-12 h-12 text-white mx-auto" />
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Ready to start learning?
              </h2>
              <p className="text-lg md:text-xl text-emerald-50 max-w-2xl mx-auto">
                Join thousands of learners already mastering AI with our practical, hands-on courses
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Link href="/courses">
                  <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100 font-semibold text-lg px-8">
                    Explore Courses
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link href="/learning-paths">
                  <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 font-semibold text-lg px-8">
                    View Learning Paths
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
