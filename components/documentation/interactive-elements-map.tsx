"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, ChevronRight } from "lucide-react";
import { interactiveElements } from "@/lib/config/interactive-elements";
import { cn } from "@/lib/utils";

interface ElementGroupProps {
  title: string;
  elements: typeof interactiveElements[keyof typeof interactiveElements];
}

function ElementGroup({ title, elements }: ElementGroupProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card className="mb-4">
      <CardHeader className="cursor-pointer" onClick={() => setIsExpanded(!isExpanded)}>
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl">{title}</CardTitle>
          {isExpanded ? <ChevronDown className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
        </div>
      </CardHeader>
      {isExpanded && (
        <CardContent>
          <div className="space-y-4">
            {elements.map((element) => (
              <div key={element.id} className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    {element.icon && <element.icon className="h-4 w-4" />}
                    <h3 className="font-medium">{element.label}</h3>
                  </div>
                  <Badge>{element.type}</Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-2">{element.description}</p>
                <p className="text-sm">
                  <span className="font-medium">Location:</span> {element.location}
                </p>
                {element.action && (
                  <p className="text-sm">
                    <span className="font-medium">Action:</span> {element.action}
                  </p>
                )}
                {element.children && element.children.length > 0 && (
                  <div className="mt-4 pl-4 border-l">
                    <p className="text-sm font-medium mb-2">Sub-elements:</p>
                    <div className="space-y-2">
                      {element.children.map((child) => (
                        <div key={child.id} className="text-sm">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              {child.icon && <child.icon className="h-3 w-3" />}
                              <span>{child.label}</span>
                            </div>
                            <Badge variant="outline">{child.type}</Badge>
                          </div>
                          <p className="text-muted-foreground mt-1">{child.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      )}
    </Card>
  );
}

export function InteractiveElementsMap() {
  return (
    <div className="container py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Interactive Elements Map</h1>
        <div className="space-y-4">
          {Object.entries(interactiveElements).map(([key, elements]) => (
            <ElementGroup
              key={key}
              title={key.charAt(0).toUpperCase() + key.slice(1)}
              elements={elements}
            />
          ))}
        </div>
      </div>
    </div>
  );
}