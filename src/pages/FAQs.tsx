import React, { useState } from 'react';
import { Search, ChevronDown, ChevronUp, MessageCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Link } from 'react-router-dom';

const FAQs: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const faqData = [
    {
      id: 1,
      category: 'Income Tax',
      question: 'Who needs to file Income Tax Return (ITR)?',
      answer: 'Every individual whose total income during the financial year exceeds the basic exemption limit must file ITR. For FY 2024-25, the basic exemption limit is ₹2.5 lakh for individuals below 60 years, ₹3 lakh for senior citizens (60-80 years), and ₹5 lakh for super senior citizens (above 80 years). Additionally, even if your income is below the exemption limit, you should file ITR if you want to claim refunds or carry forward losses.',
      popular: true
    },
    {
      id: 2,
      category: 'GST',
      question: 'What is the threshold limit for GST registration?',
      answer: 'The threshold limit for GST registration is ₹40 lakh for goods and ₹20 lakh for services in most states. For special category states (northeastern states and hill states), the limit is ₹20 lakh for goods and ₹10 lakh for services. However, certain businesses must register regardless of turnover, such as e-commerce operators, inter-state suppliers, and businesses providing online information database access.'
    },
    {
      id: 3,
      category: 'Company Registration',
      question: 'How long does it take to register a private limited company?',
      answer: 'The registration process for a private limited company typically takes 15-20 working days if all documents are in order. The process involves: 1) DIN and DSC acquisition (2-3 days), 2) Name reservation (1-2 days), 3) SPICe+ filing (7-10 days), and 4) Post-incorporation compliance (3-5 days). However, the timeline may vary depending on the completeness of documents and government processing times.',
      popular: true
    },
    {
      id: 4,
      category: 'Income Tax',
      question: 'What documents are required for ITR filing?',
      answer: 'Essential documents for ITR filing include: Form 16/16A, salary slips, bank statements, investment proofs (80C, 80D, etc.), house property documents, capital gains statements, business income details (if applicable), TDS certificates, previous year ITR (if available), and Aadhaar and PAN cards. Additional documents may be required based on your income sources.'
    },
    {
      id: 5,
      category: 'GST',
      question: 'What are the different types of GST returns?',
      answer: 'Major GST returns include: GSTR-1 (outward supplies), GSTR-3B (monthly summary), GSTR-9 (annual return), GSTR-4 (composition scheme), GSTR-5 (non-resident taxpayers), GSTR-6 (input service distributors), GSTR-7 (TDS deductors), and GSTR-8 (e-commerce operators). The frequency and applicability depend on your business type and turnover.'
    },
    {
      id: 6,
      category: 'Business Registration',
      question: 'What is the difference between LLP and Private Limited Company?',
      answer: 'Key differences: 1) Ownership: LLP has designated partners, company has shareholders. 2) Liability: LLP offers limited liability to partners, company provides limited liability to shareholders. 3) Compliance: LLP has simpler compliance requirements. 4) Fundraising: Companies can raise funds through equity/debt more easily. 5) Taxation: LLP is taxed as partnership, company faces double taxation. 6) Perpetual succession: Both have perpetual existence.',
      popular: true
    },
    {
      id: 7,
      category: 'Audit',
      question: 'Which companies require statutory audit?',
      answer: 'All companies incorporated under the Companies Act 2013 require statutory audit, except: 1) One Person Companies with turnover ≤ ₹2 crore, 2) Small companies with turnover ≤ ₹2 crore and borrowings ≤ ₹1 crore, 3) Dormant companies (with permission). Additionally, businesses with turnover > ₹1 crore require tax audit under Income Tax Act.'
    },
    {
      id: 8,
      category: 'NRI Services',
      question: 'How is NRI income taxed in India?',
      answer: 'NRI taxation depends on income source: 1) Income earned/accrued in India is taxable, 2) Foreign income is generally not taxable unless received in India, 3) Capital gains from Indian assets are taxable, 4) Bank interest varies by account type (NRE - exempt, NRO - taxable), 5) Rental income from Indian property is taxable. DTAA benefits may apply to avoid double taxation.',
      popular: true
    },
    {
      id: 9,
      category: 'Compliance',
      question: 'What is ROC annual filing and when is it due?',
      answer: 'ROC annual filing includes: 1) Annual Return (Form MGT-7) - due within 60 days of AGM, 2) Financial Statements and Board Report (Form AOC-4) - due within 30 days of AGM, 3) AGM must be held within 6 months of financial year end. For FY 2023-24, the last date is typically September 30, 2024, for companies with March year-end.'
    },
    {
      id: 10,
      category: 'Income Tax',
      question: 'What are the benefits of new tax regime vs old tax regime?',
      answer: 'New Tax Regime: Lower tax rates but no exemptions/deductions except few. Old Tax Regime: Higher tax rates but allows deductions under 80C, 80D, HRA, etc. Choose based on your deduction amount. Generally, new regime benefits those with minimal deductions, while old regime suits those with significant deductions. You can switch annually (salaried) or once (business income).'
    },
    {
      id: 11,
      category: 'GST',
      question: 'What is input tax credit (ITC) and how to claim it?',
      answer: 'ITC allows you to reduce output GST liability by the GST paid on inputs/input services. To claim ITC: 1) Supplier must file GSTR-1, 2) You must have valid tax invoice, 3) Goods/services must be used for business, 4) Payment to supplier must be made within 180 days, 5) File GSTR-3B and reconcile with GSTR-2A/2B. ITC cannot be claimed on blocked items like motor cars, food items, etc.'
    },
    {
      id: 12,
      category: 'Business Registration',
      question: 'What are the ongoing compliance requirements after company registration?',
      answer: 'Post-incorporation compliance includes: 1) Board meetings (minimum 4 per year), 2) Annual General Meeting, 3) Annual filing with ROC (AOC-4, MGT-7), 4) Income tax returns, 5) GST returns (if applicable), 6) PF/ESI compliance (if employees), 7) Maintenance of statutory registers, 8) DIR-3 KYC for directors. Non-compliance attracts penalties and prosecution.'
    }
  ];

  const categories = ['All', 'Income Tax', 'GST', 'Company Registration', 'Business Registration', 'Audit', 'NRI Services', 'Compliance'];

  const filteredFAQs = faqData.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const popularFAQs = faqData.filter(faq => faq.popular);

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Find answers to common questions about taxation, compliance, business registration, 
            and other CA services. Can't find what you're looking for? Contact our experts.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row gap-6 mb-8">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search FAQs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "professional" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          <p className="text-muted-foreground text-center">
            Showing {filteredFAQs.length} of {faqData.length} questions
            {searchTerm && ` for "${searchTerm}"`}
            {selectedCategory !== 'All' && ` in ${selectedCategory}`}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main FAQ Content */}
          <div className="lg:col-span-2">
            {/* Popular FAQs */}
            {selectedCategory === 'All' && searchTerm === '' && (
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-primary mb-6 flex items-center">
                  <span>Popular Questions</span>
                  <Badge className="ml-3 bg-ca-gold text-foreground">Most Asked</Badge>
                </h2>
                <Accordion type="single" collapsible className="space-y-4">
                  {popularFAQs.map((faq) => (
                    <AccordionItem key={faq.id} value={`popular-${faq.id}`} className="border border-border rounded-lg shadow-ca-sm">
                      <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-muted/30 rounded-lg">
                        <div className="flex items-center space-x-3 text-left">
                          <Badge variant="outline" className="text-xs">{faq.category}</Badge>
                          <span className="font-medium">{faq.question}</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-4">
                        <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </section>
            )}

            {/* All FAQs */}
            <section>
              <h2 className="text-2xl font-bold text-primary mb-6">
                {searchTerm || selectedCategory !== 'All' ? 'Search Results' : 'All Questions'}
              </h2>
              <Accordion type="single" collapsible className="space-y-4">
                {filteredFAQs.map((faq) => (
                  <AccordionItem key={faq.id} value={`faq-${faq.id}`} className="border border-border rounded-lg shadow-ca-sm">
                    <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-muted/30 rounded-lg">
                      <div className="flex items-center space-x-3 text-left">
                        <Badge variant="outline" className="text-xs">{faq.category}</Badge>
                        <span className="font-medium">{faq.question}</span>
                        {faq.popular && (
                          <Badge className="bg-ca-gold text-foreground text-xs">Popular</Badge>
                        )}
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4">
                      <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>

              {filteredFAQs.length === 0 && (
                <Card className="shadow-ca-md">
                  <CardContent className="p-12 text-center">
                    <MessageCircle className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-primary mb-2">No results found</h3>
                    <p className="text-muted-foreground mb-6">
                      We couldn't find any FAQs matching your search. Try different keywords or contact us directly.
                    </p>
                    <Button variant="professional" asChild>
                      <Link to="/contact">Contact Our Experts</Link>
                    </Button>
                  </CardContent>
                </Card>
              )}
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="space-y-8">
              {/* Quick Categories */}
              <Card className="shadow-ca-md">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-primary mb-4">Browse by Category</h3>
                  <div className="space-y-2">
                    {categories.slice(1).map((category) => (
                      <Button
                        key={category}
                        variant={selectedCategory === category ? "professional" : "ghost"}
                        size="sm"
                        className="w-full justify-between"
                        onClick={() => setSelectedCategory(category)}
                      >
                        <span>{category}</span>
                        <span className="text-xs">
                          {faqData.filter(faq => faq.category === category).length}
                        </span>
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Contact Support */}
              <Card className="shadow-ca-md bg-gradient-card">
                <CardContent className="p-6 text-center">
                  <MessageCircle className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-primary mb-2">Still Need Help?</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Can't find the answer you're looking for? Our expert CA team is here to help.
                  </p>
                  <div className="space-y-3">
                    <Button variant="professional" size="sm" className="w-full" asChild>
                      <Link to="/contact">Contact Us</Link>
                    </Button>
                    <Button variant="outline" size="sm" className="w-full">
                      <a href="tel:+918401539713">Call: +91 84015 39713</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Popular Topics */}
              <Card className="shadow-ca-md">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-primary mb-4">Popular Topics</h3>
                  <div className="space-y-3">
                    {[
                      'ITR Filing Deadline',
                      'GST Registration',
                      'Company Registration',
                      'Tax Saving Tips',
                      'NRI Taxation',
                      'Audit Requirements'
                    ].map((topic, index) => (
                      <div key={index} className="flex items-center space-x-2 text-sm">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-foreground hover:text-primary cursor-pointer transition-colors">
                          {topic}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <section className="mt-16 text-center bg-gradient-card p-12 rounded-2xl">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Need Personalized Guidance?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            While our FAQs cover common questions, every situation is unique. 
            Get personalized advice from our expert CA team for your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="xl" asChild>
              <Link to="/contact">Schedule Free Consultation</Link>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <Link to="/services">View Our Services</Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FAQs;