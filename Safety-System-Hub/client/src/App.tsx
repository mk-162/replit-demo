import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import DesignSystem from "@/pages/design-system";
import AcademyHome from "@/pages/academy/index";
import GettingStarted from "@/pages/academy/getting-started";
import BlogIndex from "@/pages/academy/blog";
import ArticleView from "@/pages/academy/article";
import CategoryPage from "@/pages/category";
import ProductPage from "@/pages/product";

function Router() {
  return (
    <Switch>
      <Route path="/" component={DesignSystem} />
      <Route path="/design-system" component={DesignSystem} />
      <Route path="/academy" component={AcademyHome} />
      <Route path="/academy/getting-started" component={GettingStarted} />
      <Route path="/academy/blog" component={BlogIndex} />
      <Route path="/academy/article/:slug" component={ArticleView} />
      <Route path="/category" component={CategoryPage} />
      <Route path="/product/:slug" component={ProductPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
